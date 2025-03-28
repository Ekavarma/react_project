import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components & Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/Usersignup";
import Mainpage from "./components/Landingpage";
import AuthPage from "./components/page";
import "./styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("adminToken"));

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    return (
        <Router>
            <AppContent user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        </Router>
    );
}

function AppContent({ user, setUser, isAdmin, setIsAdmin }) {
    return (
        <Layout user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin}>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/booking" element={user ? <Booking /> : <UserLogin setUser={setUser} />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
                <Route path="/login" element={<UserLogin setUser={setUser} />} />
                <Route path="/user-signup" element={<UserSignup setUser={setUser} />} />
                <Route path="/page" element={<AuthPage setUser={setUser} />} />
            </Routes>
        </Layout>
    );
}
function Layout({ children, user, setUser, isAdmin, setIsAdmin }) {
    const location = useLocation();
    const hideNavAndFooter = location.pathname === "/";

    return (
        <div className="app-container">
            {!hideNavAndFooter && (
                <Navbar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            )}
            <div className="content">{children}</div>
            {!hideNavAndFooter && <Footer />}
        </div>
    );
}



export default App;











// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // Components & Pages
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import Booking from "./pages/Booking";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminLogin from "./pages/AdminLogin";
// import UserLogin from "./pages/UserLogin";
// import UserSignup from "./pages/Usersignup";
// import Mainpage from "./components/Landingpage";
// import AuthPage from "./components/page";
// import "./styles/global.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// function App() {
//     const [user, setUser] = useState(null);
//     const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("adminToken")); // ✅ Initialize from localStorage

//     useEffect(() => {
//         const loggedInUser = localStorage.getItem("user");
//         if (loggedInUser) {
//             setUser(JSON.parse(loggedInUser));
//         }
//     }, []);

//     return (
//         <Router>
//             <AppContent user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
//         </Router>
//     );
// }

// function AppContent({ user, setUser, isAdmin, setIsAdmin }) {
//     const location = useLocation();
//     const hideNavAndFooter = location.pathname === "/";

//     return (
//         <>
//             {!hideNavAndFooter && <Navbar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
//             <Routes>
//                 <Route path="/" element={<Mainpage />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/events" element={<Events />} />
//                 <Route path="/booking" element={user ? <Booking /> : <UserLogin setUser={setUser} />} />
//                 <Route path="/admin-dashboard" element={<AdminDashboard />} />
//                 <Route path="/admin-login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />  {/* ✅ Pass setIsAdmin */}
//                 <Route path="/login" element={<UserLogin setUser={setUser} />} />
//                 <Route path="/user-signup" element={<UserSignup setUser={setUser} />} />
//                 <Route path="/page" element={<AuthPage setUser={setUser} />} />
//             </Routes>
//             {!hideNavAndFooter && <Footer />}
//         </>
//     );
// }

// export default App;













// function AppContent({ user, setUser, isAdmin, setIsAdmin }) {
//     const location = useLocation();
//     const hideNavAndFooter = location.pathname === "/";

//     return (
//         <div className="app-container">
//             {!hideNavAndFooter && <Navbar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
//             <div className="content">
//                 <Routes>
//                     <Route path="/" element={<Mainpage />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/events" element={<Events />} />
//                     <Route path="/booking" element={user ? <Booking /> : <UserLogin setUser={setUser} />} />
//                     <Route path="/admin-dashboard" element={<AdminDashboard />} />
//                     <Route path="/admin-login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
//                     <Route path="/login" element={<UserLogin setUser={setUser} />} />
//                     <Route path="/user-signup" element={<UserSignup setUser={setUser} />} />
//                     <Route path="/page" element={<AuthPage setUser={setUser} />} />
//                 </Routes>
//             </div>
//             {!hideNavAndFooter && <Footer />}
//         </div>
//     );
// }

// export default AppContent;



