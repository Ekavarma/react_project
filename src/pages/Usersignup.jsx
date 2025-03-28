
import "../styles/UserSignup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignup({ setUser }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const existingUser = JSON.parse(localStorage.getItem("user") || "{}");

        if (existingUser.name === name) {
            alert("User already exists. Please log in.");
            navigate("/login");
        } else {
            const newUser = { name, password };
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
            alert("Signup Successful! You can now log in.");
            navigate("/login");
        }
    };

    return (
        <div className="user-signup-container">
            <h2>User Signup</h2>
            <form onSubmit={handleSignup}>
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

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default UserSignup;