import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/booking.css"; // Import the updated CSS

function Booking() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setIsAuthenticated(true);
      setLoggedInUser(user);
    } else {
      navigate("/page"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Birthday Party",
    date: "",
  });
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Only remove user details
    localStorage.removeItem("authToken"); // Remove authentication token if used
  
    window.location.href = "/page"; // Redirect to login page
  };
  

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if user selects a past date
    if (name === "date" && value < today) {
      alert("You cannot select a past date!");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loggedInUser) {
      alert("You must be logged in to book an event.");
      return;
    }

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Store the booking with the logged-in user's name
    const newBooking = {
      ...formData,
      name: loggedInUser.name, // Use logged-in user's name
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Notify the Admin Dashboard of the update
    window.dispatchEvent(new Event("storage"));

    alert("Booking submitted successfully!");
    setFormData({ name: "", phone: "", eventType: "Birthday Party", date: "" });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Event</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Type</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange}>
            <option>Birthday Party</option>
            <option>Conference</option>
            <option>Marriage</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today} // Disable past dates
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Booking;






// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/booking.css"; // Import the updated CSS

// function Booking() {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       setIsAuthenticated(true);
//     } else {
//       navigate("/page"); // Redirect to login if not authenticated
//     }
//   }, [navigate]);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     eventType: "Birthday Party",
//     date: "",
//   });

//   // Get today's date in YYYY-MM-DD format
//   const today = new Date().toISOString().split("T")[0];

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Check if user selects a past date
//     if (name === "date" && value < today) {
//       alert("You cannot select a past date!");
//       return;
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get existing bookings or initialize an empty array
//     let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

//     // Create a new booking object
//     const newBooking = { ...formData, user: loggedInUser?.name };

//     // Add new booking to the array
//     bookings.push(newBooking);

//     // Store updated bookings in localStorage
//     localStorage.setItem("bookings", JSON.stringify(bookings));

//     alert("Booking submitted successfully!");

//     // Reset the form after submission
//     setFormData({ name: "", phone: "", eventType: "Birthday Party", date: "" });
// };

//   return (
//     <div className="booking-container">
//       <h2>Book Your Event</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Event Type</label>
//           <select name="eventType" value={formData.eventType} onChange={handleChange}>
//             <option>Birthday Party</option>
//             <option>Conference</option>
//             <option>Marriage</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             min={today} // Disable past dates
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Booking;
