import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar1.css"; // Import the updated CSS

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check user login status on component mount & when 'user' changes
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]); // Depend on 'user' to update dynamically

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Remove only user session data
    setUser(null);
    setIsLoggedIn(false);
    navigate("/"); // Redirect to Home
  };

  return (
    <nav className="navbar1">
      <Link className="logo" to="/">Event Management</Link>
      <div className="nav-links">
        {/* Show Logout Button only if user is on Admin Dashboard */}
        {location.pathname === "/admin-dashboard" ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <>
            <Link to="/events">Event</Link>
            <Link to="/booking">Booking</Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            ) : (
              <Link to="/page">Login</Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;







// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../styles/navbar1.css"; // Import the updated CSS

// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInUser");
//     if (storedUser) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser"); // Remove only user session data
//     setUser(null);
//     setIsLoggedIn(false);
//     navigate("/"); // Redirect to Home
//   };

//   return (
//     <nav className="navbar1">
//       <Link className="logo" to="/">Event Management</Link>
//       <div className="nav-links">
//         {/* Show Logout Button only if user is on Admin Dashboard */}
//         {location.pathname === "/admin-dashboard" ? (
//           <button onClick={handleLogout} className="logout-btn">Logout</button>
//         ) : (
//           <>
//             <Link to="/events">Event</Link>
//             <Link to="/booking">Booking</Link>
//             {isLoggedIn ? (
//               <button onClick={handleLogout} className="logout-btn">Logout</button>
//             ) : (
//               <Link to="/page">Login</Link>
//             )}
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;








// import React from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../styles/navbar1.css"; // Import the updated CSS

// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser"); // Remove only user session data
//     setUser(null);
//     navigate("/"); // Redirect to Home
//   };

//   return (
//     <nav className="navbar1">
//       <Link className="logo" to="/">Event Management</Link>
//       <div className="nav-links">
//         {/* Show Logout Button only if user is on Admin Dashboard */}
//         {location.pathname === "/admin-dashboard" ? (
//           <button onClick={handleLogout} className="logout-btn">Logout</button>
//         ) : (
//           <>
//             <Link to="/events">Event</Link>
//             <Link to="/booking">Booking</Link>
//             {user ? (
//               <button onClick={handleLogout} className="logout-btn">Logout</button>
//             ) : (
//               <Link to="/page">Logins</Link>
//             )}
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


