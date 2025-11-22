// // // frontend/src/components/Navbar.jsx
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';

// // function Navbar() {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/login'); // Redirect to login page after logout
// //   };

// //   return (
// //     <nav className="bg-indigo-700 p-4 shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center">
// //         <Link to="/" className="text-white text-2xl font-bold hover:text-indigo-200 transition duration-200">
// //           HabitPulse
// //         </Link>
// //         <div className="flex items-center space-x-6">
// //           {user ? (
// //             <>
// //               <span className="text-white text-lg">Welcome, {user.name}!</span>
// //               <button
// //                 onClick={handleLogout}
// //                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <Link to="/login" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200">
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// // frontend/src/components/Navbar.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-indigo-700 p-4 shadow-md sticky top-0 z-50 h-16"> {/* Added h-16 */}
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-2xl font-bold hover:text-indigo-200 transition duration-200">
//           HabitPulse
//         </Link>
//         <div className="flex items-center space-x-6">
//           {user ? (
//             <>
//               <Link to="/dashboard" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
//                 Dashboard
//               </Link>
//               <Link to="/tracker" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
//                 Tracker
//               </Link>
//               <Link to="/profile" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
//                 Profile
//               </Link>
//               <span className="text-white text-lg font-medium">Hi, {user.name}!</span> {/* Moved 'Welcome' here */}
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
//                 Login
//               </Link>
//               <Link to="/register" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus="ring-indigo-500 focus:ring-opacity-50 transition duration-200">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-700 p-4 shadow-md sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-indigo-200 transition duration-200">
          HabitPulse
        </Link>
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
                Dashboard
              </Link>
              <Link to="/tracker" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
                Tracker
              </Link>
              <Link to="/profile" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
                Profile
              </Link>
              <span className="text-white text-lg font-medium">Hi, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-indigo-200 transition duration-200 text-lg">
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
                // The problematic part was: focus="ring-indigo-500 focus:ring-opacity-50
                // Corrected to: focus:ring-indigo-500 focus:ring-opacity-50
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;