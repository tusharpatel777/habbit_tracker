
🚀 HabitPulse - AI-Powered Habit Tracker

HabitPulse is a modern, futuristic habit tracking application with a dark, glassmorphic UI and dynamic animations. It helps users build routines, set goals, and transform their lives, featuring AI-driven habit suggestions.

✨ Key Features

Secure User Authentication (Register, Login, Logout)

Create, Track, Complete, and Delete Habits

Habit Streaks and Dashboard Overview

AI-Powered Habit Suggestions

Personal Profile Management


🛠️ Setup Instructions

Follow these steps to get HabitPulse running locally.

Prerequisites

Node.js (LTS recommended)

npm or Yarn

1. Clone the Repository
code
Bash
download
content_copy
expand_less
git clone https://github.com/tusharpatel777/habbit_tracker.git
cd habit-tracker
2. Backend Setup
code
Bash
download
content_copy
expand_less
cd backend
npm install 

Create a .env file in the backend directory with:

code
Env
download
content_copy
expand_less
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_strong_secret_key
GEMINI_API_KEY=your_openai_api_key (optional, for AI suggestions)

Start the Backend:

code
Bash
download
content_copy
expand_less
npm start 

The backend will run on http://localhost:5000.

3. Frontend Setup
code
Bash
download
content_copy
expand_less
cd ../frontend
npm install # or yarn install
npm install @heroicons/react # for UI icons

Create a .env file in the frontend directory with:

code
Env
download
content_copy
expand_less

VITE_API_BASE_URL=http://localhost:5000/api

Start the Frontend:

code
Bash
download
content_copy
expand_less
npm run dev # or yarn dev

The frontend will open in your browser, typically on http://localhost:5173.

⏱️ Time Taken for Styling

The comprehensive UI/UX styling refactor across all components (Home, Login, Register, Profile, Dashboard, Navbar, Forms, AI Suggestion, Habit List) took an estimated 1 hours. This included implementing the dark theme, gradient texts, and custom animations.

🧐 Assumptions

Existing Core Functionality: The backend API and React context for authentication and habit management were already functional. The task focused purely on frontend styling.

Tailwind CSS Setup: Tailwind CSS was assumed to be correctly set up and configured in the frontend.

API Consistency: Backend API endpoints provide consistent data structures as used in the frontend components.

Heroicons: @heroicons/react is the chosen icon library.

🌟 Bonus

Engaging User Experience: Utilized micro-animations and interactive elements to make the UI dynamic and visually appealing.

Integrated Iconography: Seamlessly incorporated Heroicons for both functional elements and subtle animated background effects.