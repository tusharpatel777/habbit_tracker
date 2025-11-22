const { GoogleGenerativeAI } = require('@google/generative-ai');
const env = require('../config/env');

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

exports.suggestHabits = async (req, res) => {
  const { goal } = req.body;

  if (!goal) {
    return res.status(400).json({ success: false, error: 'Please provide a user goal.' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Using gemini-pro model

    const prompt = `Given the user goal: "${goal}", suggest 3 specific, actionable, and measurable habits.
                    For each habit, provide a short name (max 5 words) and a brief description.
                    Format the output as a JSON array of objects, like this:
                    [
                      { "name": "Habit 1 Name", "description": "Description for habit 1." },
                      { "name": "Habit 2 Name", "description": "Description for habit 2." },
                      { "name": "Habit 3 Name", "description": "Description for habit 3." }
                    ]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Attempt to parse the text as JSON
    let suggestions;
    try {
      suggestions = JSON.parse(text);
      if (!Array.isArray(suggestions) || suggestions.length === 0) {
          throw new Error("Parsed content is not a valid array or is empty.");
      }
      // Optional: Basic validation of suggested objects
      suggestions = suggestions.filter(s => s.name && s.description);
      if (suggestions.length === 0) {
          throw new Error("No valid suggestions found after filtering.");
      }
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", parseError);
      console.error("Raw AI response:", text);
      // Fallback: If parsing fails, try to extract something or return a generic error
      return res.status(500).json({
        success: false,
        error: 'Failed to parse AI suggestions. Please try again.',
        rawResponse: text // For debugging
      });
    }

    res.status(200).json({ success: true, data: suggestions });

  } catch (err) {
    console.error('Error suggesting habits with AI:', err);
    res.status(500).json({ success: false, error: 'Failed to generate habit suggestions.' });
  }
};