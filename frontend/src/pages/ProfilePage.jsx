// // frontend/src/pages/ProfilePage.jsx
// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { updateUserDetails } from '../services/authService';

// function ProfilePage() {
//   const { user, token, logout, setUser } = useAuth();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null); // Success/Error messages

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
//       setEmail(user.email);
//     }
//   }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       const updatedUser = await updateUserDetails({ name, email }, token);
//       setUser(updatedUser); // Update user in AuthContext
//       setMessage({ type: 'success', text: 'Profile updated successfully!' });
//     } catch (err) {
//       console.error('Failed to update profile:', err);
//       setMessage({ type: 'error', text: err.message || 'Failed to update profile.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
//         <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">Your Profile</h2>

//         {message && (
//           <div className={`px-4 py-3 rounded relative mb-6 ${message.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`} role="alert">
//             <strong className="font-bold">{message.type === 'success' ? 'Success:' : 'Error:'} </strong>
//             <span className="block sm:inline">{message.text}</span>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//               disabled={loading}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//               disabled={loading}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-600 text-white text-xl font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={loading}
//           >
//             {loading ? 'Updating...' : 'Update Profile'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
// frontend/src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateUserDetails } from '../services/authService';

function ProfilePage() {
  const { user, token, logout, setUser } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // Success/Error messages

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const updatedUser = await updateUserDetails({ name, email }, token);
      setUser(updatedUser); // Update user in AuthContext
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      console.error('Failed to update profile:', err);
      setMessage({ type: 'error', text: err.message || 'Failed to update profile. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Dynamic Background Elements (subtle, faded Heroicons for futuristic vibe) */}
      {/* User Icon (top-left) - From Heroicons outline */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
      {/* Cog (Settings) Icon (bottom-right) - From Heroicons outline */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.502c.55 0 1.02.398 1.11.94l.213 1.281c.923.256 1.79.59 2.59.971l1.173-.807c.45-.31.993-.213 1.36.216l1.756 2.532c.3.434.28 1.05-.04 1.464l-.97 1.254c.04.225.06.45.06.676v.24c0 .225-.02.45-.06.676l.97 1.254c.32.414.34 1.03.04 1.464l-1.755 2.532c-.368.429-.91.517-1.36.216l-1.173-.807c-.8.381-1.667.715-2.59.97l-.213 1.281c-.09.543-.56.94-1.11.94h-2.502c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.923-.256-1.79-.59-2.59-.971l-1.173.807c-.45.31-.993.213-1.36-.216l-1.756-2.532c-.3-.434-.28-1.05.04-1.464l.97-1.254a4.333 4.333 0 01-.06-.676v-.24c0-.225.02-.45.06-.676l-.97-1.254c-.32-.414-.34-1.03-.04-1.464l1.755-2.532c.368-.429.91-.517 1.36-.216l1.173.807c.8-.381 1.667-.715 2.59-.97l.213-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      {/* Check Badge (top-right) - From Heroicons outline */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-purple-800/40 animate-fade-in-up">
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in-up animate-delay-200">
          Your Profile
        </h2>

        {message && (
          <div className={`px-4 py-3 rounded relative mb-6 animate-fade-in-up animate-delay-300 ${message.type === 'success' ? 'bg-green-900/30 border border-green-700 text-green-300' : 'bg-red-900/30 border border-red-700 text-red-300'}`} role="alert">
            <strong className="font-bold">{message.type === 'success' ? 'Success:' : 'Error:'} </strong>
            <span className="block sm:inline">{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-fade-in-up animate-delay-400">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200"
              required
              disabled={loading}
            />
          </div>
          <div className="animate-fade-in-up animate-delay-500">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200"
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/40 animate-fade-in-up animate-delay-600"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;