import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const [bookings, setBookings] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookings = () => {
            const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
            setBookings(storedBookings);
        };
    
        fetchBookings(); // Load bookings initially
    
        const handleUpdate = () => fetchBookings();
    
        // Listen for custom update event
        window.addEventListener("updateBookings", handleUpdate);
    
        return () => window.removeEventListener("updateBookings", handleUpdate);
    }, []);
    

    const handleDelete = (index) => {
        const updatedBookings = bookings.filter((_, i) => i !== index);
        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));

        // Notify other tabs about the update
        window.dispatchEvent(new Event("storage"));
    };

    const filteredBookings = bookings.filter(booking =>
        booking.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2>Admin Dashboard</h2>

            {/* Search Input */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Table */}
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Event Type</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBookings.length > 0 ? (
                        filteredBookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.eventType}</td>
                                <td>{booking.date}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No bookings found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {
//     const [bookings, setBookings] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("adminToken");
//         if (!token) {
//             alert("Unauthorized access");
//             navigate("/admin-login");
//         } else {
//             setBookings(JSON.parse(localStorage.getItem("bookings")) || []);
//         }
//     }, []);
//     useEffect(() => {
//         // Fetch bookings from localStorage
//         const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//         setBookings(storedBookings);
//       }, []);

//     const handleDelete = (index) => {
//         const updatedBookings = bookings.filter((_, i) => i !== index);
//         setBookings(updatedBookings);
//         localStorage.setItem("bookings", JSON.stringify(updatedBookings));
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Admin Dashboard</h2>
//             <input
//                 type="text"
//                 className="form-control mb-3"
//                 placeholder="Search by name"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Event Type</th>
//                         <th>Date</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bookings
//                         .filter(booking => booking.name.toLowerCase().includes(searchQuery.toLowerCase()))
//                         .map((booking, index) => (
//                             <tr key={index}>
//                                 <td>{booking.name}</td>
//                                 <td>{booking.phone}</td>
//                                 <td>{booking.eventType}</td>
//                                 <td>{booking.date}</td>
//                                 <td>
//                                     <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default AdminDashboard;






