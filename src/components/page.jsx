import React, { useState } from "react";
import UserLogin from "../pages/UserLogin";
import AdminLogin from "../pages/AdminLogin";
import UserSignup from "../pages/Usersignup";
import "../styles/page.css"; // Custom CSS for styling

const AuthPage = () => {
  const [activePage, setActivePage] = useState("image");
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Welcome to Our Platform</h2>

      <div className="auth-btn-group">
        <button className="auth-btn login-btn" onClick={() => setActivePage("login")}>
          User Login
        </button>
        <button className="auth-btn signup-btn" onClick={() => setActivePage("signup")}>
          Signup
        </button>
        <button className="auth-btn admin-btn" onClick={() => setActivePage("admin")}>
          Admin Login
        </button>
      </div>

      <div className="auth-content">
        {activePage === "image" && (
          <img
            src="https://img.freepik.com/premium-photo/high-angle-view-information-sign-table_1048944-25300360.jpg?w=996"
            alt="Information Sign"
            className="auth-image"
          />
        )}
        {activePage === "login" && <UserLogin setUser={setUser} />}
        {activePage === "signup" && <UserSignup setUser={setUser} />}
        {activePage === "admin" && <AdminLogin setIsAdmin={setIsAdmin} />}
      </div>
    </div>
  );
};

export default AuthPage;

// import React, { useState } from "react";
// import UserLogin from "../pages/UserLogin";
// import AdminLogin from "../pages/AdminLogin";
// import "bootstrap/dist/css/bootstrap.min.css";
// import UserSignup from "../pages/Usersignup";
// // import "../styles/page.css"
// import "../styles/page.css";  
// const AuthPage = () => {
//   const [activePage, setActivePage] = useState("image");
//   const [user, setUser] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);

//   return (
//     <div className="container text-center mt-5">
//       <h2 className="mb-4">Welcome to Our Platform</h2>
      
//       <div className="btn-group mb-4" role="group">
//         <button className="btn btn-primary" onClick={() => setActivePage("login")}>
//           User Login
//         </button>
//         <button className="btn btn-success" onClick={() => setActivePage("signup")}>
//           Signup
//         </button>
//         <button className="btn btn-danger" onClick={() => setActivePage("admin")}>
//           Admin Login
//         </button>
//       </div>
      
//       <div className="border p-4 rounded shadow-sm bg-light">
//         {activePage === "image" && (
//           <img
//             src="https://img.freepik.com/premium-photo/high-angle-view-information-sign-table_1048944-25300360.jpg?w=996"
//             alt="Information Sign"
//             className="img-fluid"
//           />
//         )}
//         {activePage === "login" && <UserLogin setUser={setUser} />}
//         {activePage === "signup" && <UserSignup setUser={setUser} />}
//         {activePage === "admin" && <AdminLogin setIsAdmin={setIsAdmin} />}
//       </div>
//     </div>
//   );
// };

// export default AuthPage;