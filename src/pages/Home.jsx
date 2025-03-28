// import React from "react";
// import { Container, Button } from "react-bootstrap";

// function Home() {
//     return (
//         <Container className="home-container text-center d-flex flex-column justify-content-center align-items-center vh-100">
//             <h1>Welcome to Event Management</h1>
//             <p>We organize memorable events like birthdays, conferences, and marriages.</p>
//             <Button href="/booking" variant="primary" className="mt-3">Book an Event</Button>
//         </Container>
//     );
// }

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Custom CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Event Management</h1>
            <p>We organize memorable events like birthdays, conferences, and marriages.</p>
            <Link to="/booking" className="book-event-btn">Book an Event</Link>
        </div>
    );
}

export default Home;
