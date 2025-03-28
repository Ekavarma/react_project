






import "../styles/AdminLogin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ setIsAdmin }) {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username === "admin" && formData.password === "admin123") {
            localStorage.setItem("adminToken", "loggedIn");
            setIsAdmin(true);
            alert("Login successful!");
            navigate("/admin-dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;

