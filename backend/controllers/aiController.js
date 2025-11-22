const { GoogleGenerativeAI } = require('@google/generative-ai');
const env = require('../config/env');

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

exports.suggestHabits = async (req, res) => {
  const { goal } = req.body;

  if (!env.GEMINI_API_KEY || env.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
    console.error('ERROR: GEMINI_API_KEY is not set or is still the placeholder.');
    return res.status(500).json({ success: false, error: 'Gemini API Key is not configured correctly in the backend. Please check your .env file.' });
  }

  if (!goal) {
    return res.status(400).json({ success: false, error: 'Please provide a user goal.' });
  }

  console.log('--- AI Suggestion Request ---');
  console.log('Goal:', goal);

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Confirmed working model

    const prompt = `Given the user goal: "${goal}", suggest 3 specific, actionable, and measurable habits.
                    For each habit, provide a short name (max 5 words) and a brief description.
                    Format the output as a JSON array of objects, like this:
                    [
                      { "name": "Habit 1 Name", "description": "Description for habit 1." },
                      { "name": "Habit 2 Name", "description": "Description for habit 2." },
                      { "name": "Habit 3 Name", "description": "Description for habit 3." }
                    ]`;

    console.log('Sending prompt to Gemini:', prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    console.log('Raw AI response text:', text);

    const jsonRegex = /```json\s*([\s\S]*?)\s*```/;
    const match = text.match(jsonRegex);

    if (match && match[1]) { 
      text = match[1].trim(); 
      console.log('Cleaned AI response text (after markdown removal):', text);
    } else {
      console.warn('AI response did not match expected markdown JSON format. Attempting direct JSON.parse.');
   
    }

    let suggestions;
    try {
      suggestions = JSON.parse(text);
      if (!Array.isArray(suggestions) || suggestions.length === 0) {
          throw new Error("Parsed content is not a valid array or is empty.");
      }
      suggestions = suggestions.filter(s => s.name && s.description);
      if (suggestions.length === 0) {
          throw new Error("No valid suggestions found after filtering.");
      }
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", parseError);
      console.error("Text attempting to parse (after stripping attempt):", text);
      return res.status(500).json({
        success: false,
        error: 'Failed to parse AI suggestions from model output. The AI might have returned malformed JSON or an unexpected format.',
        rawResponse: text 
      });
    }

    res.status(200).json({ success: true, data: suggestions });

  } catch (err) {
    console.error('CRITICAL AI Error in suggestHabits (unhandled exception):', err);
    if (err.message && err.message.includes('API key')) {
      return res.status(401).json({ success: false, error: 'Gemini API Error: Invalid or expired API Key.' });
    }
    if (err.status) {
        console.error('Gemini API Error Status:', err.status);
        console.error('Gemini API Error Details:', err.details);
        return res.status(err.status).json({ success: false, error: err.details || `Gemini API Error: ${err.message}` });
    }
    res.status(500).json({ success: false, error: 'Failed to generate habit suggestions due to an unhandled server-side AI error.' });
  }
};