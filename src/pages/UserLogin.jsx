
import "../styles/UserLogin.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin({ setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
      setUser(storedUser);
    }
  }, [setUser]);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.name === name && storedUser.password === password) {
      setUser(storedUser);
      setLoggedInUser(storedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      alert("Login Successful!");
      navigate("/booking");
    } else {
      alert("Wrong credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <div className="user-login-container">
      <h2>{loggedInUser ? `Welcome, ${loggedInUser.name}!` : "User Login"}</h2>

      {!loggedInUser ? (
        <form onSubmit={handleLogin}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      ) : (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      )}
    </div>
  );
}

export default UserLogin;


// import "../styles/UserLogin.css";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function UserLogin({ setUser }) {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (storedUser) {
//       setLoggedInUser(storedUser);
//       setUser(storedUser);
//     }
//   }, [setUser]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//     if (storedUser && storedUser.name === name && storedUser.password === password) {
//       setUser(storedUser);
//       setLoggedInUser(storedUser);
//       localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
//       alert("Login Successful!");
//       navigate("/booking");
//     } else {
//       alert("Wrong credentials");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setUser(null);
//     setLoggedInUser(null);
//     navigate("/");
//   };

//   return (
//     <div className="user-login-container">
//       <h2>{loggedInUser ? `Welcome, ${loggedInUser.name}!` : "User Login"}</h2>

//       {!loggedInUser ? (
//         <form onSubmit={handleLogin}>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Login</button>
//         </form>
//       ) : (
//         <button onClick={handleLogout} className="logout-btn">
//           Logout
//         </button>
//       )}
//     </div>
//   );
// }

// export default UserLogin;
