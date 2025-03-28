import React from "react";
import "../customcss/contactus.css"; // Ensure CSS is imported

function Contactus() {
  return (
    <footer>
      <div className="container" id="Contactus">
        {/* Contact Info */}
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: eventmanagemt@gmail.com</p>
          <p>Phone no: +91 9652180269</p>
          <p>Address: Elite Towers, 3rd Floor, MG Road, Bangalore, India – 560001</p>
        </div> 

        {/* Quick Links */}
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contactus">Contact Us</a></li>
          </ul>
        </div> 

        {/* Social Media */}
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href=""><i className="fab fa-facebook"></i></a></li>
            <li><a href=""><i className="fab fa-twitter"></i></a></li>
            <li><a href=""><i className="fab fa-instagram"></i></a></li>
            <li><a href=""><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div> 
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        © {new Date().getFullYear()} Event Management. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Contactus;









// import "../customcss/contactus.css"
// function Contactus(){
//     return(
//         <>
//         <div class="container">
//             <div class="footer-content">
//                 <h3>Contact Us</h3>
//                 <p>Email:eventmanagemt@gmail.com</p>
//                 <p>Phone no:+91 9652180269</p>
//                 <p>Address:"Elite Towers, 3rd Floor, MG Road, Bangalore, India – 560001</p>

//             </div> 
//             <div class="footer-content">
//                 <h3>Quick Links</h3>
//                 <ul>
//                     <li><a href="">Home</a></li>
//                     <li><a href="">About</a></li>
//                     <li><a href="">Services</a></li>
//                     <li><a href="">Gallery</a></li>
//                     <li><a href="">Contactus</a></li>

//                 </ul>
//             </div> 
//             <div class="footer-content">
//                 <h3>Follow us</h3></div> 
//                 <ul class="social-icons">
//                 <li><a href=""><i class="fab fa-facebook"></i></a></li>
//                 <li><a href=""><i class="fab fa-twitter"></i></a></li>
//                 <li><a href=""><i class="fab fa-instagram"></i></a></li>
//                 <li><a href=""><i class="fab fa-linkedin"></i></a></li>
//                 </ul>

//         </div>
//         </>
//     )
// }
// export default Contactus






// function ContactUs() {
//     const contactInfo = {
//         companyName: "Elite Events",
//         tagline: "Crafting Unforgettable Moments",
//         description: "At Elite Events, we believe that every celebration deserves a touch of elegance and perfection. With years of expertise in event planning, we specialize in weddings, corporate events, private parties, and live music entertainment. Whether it’s an intimate gathering or a grand affair, our team works tirelessly to bring your vision to life with seamless execution and creative excellence. From stunning décor and meticulous planning to world-class entertainment and flawless coordination, we ensure every detail is handled with professionalism and passion. Our commitment to delivering unique, memorable, and stress-free events has made us a trusted name in the industry.",
//         address: "Elite Towers, 3rd Floor, MG Road, Bangalore, India – 560001",
//         email: "eliteevent@gmail.com",
//         phone: "+91 98480 22338",
//         workingHours: "Monday to Saturday, 9:00 AM - 7:00 PM"
//     };

//     return (
//         <div id="contactcus" style={{ background: "#1A1A2E", color: "white", padding: "20px" }}>
//             <div style={{ textAlign: "center" }}>
//                 <h2>Contact Us</h2>
//                 <h3>{contactInfo.companyName} – {contactInfo.tagline}</h3>
//                 <p style={{ maxWidth: "800px", margin: "0 auto" }}>{contactInfo.description}</p>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "30px", padding: "20px", flexWrap: "wrap" }}>
//                 <div style={{ textAlign: "center" }}>
//                     <h3>Address</h3>
//                     <p>{contactInfo.address}</p>
//                 </div>
//                 <div style={{ textAlign: "center" }}>
//                     <h3>Connect</h3>
//                     <p>Email: {contactInfo.email}</p>
//                     <p>Phone: {contactInfo.phone}</p>
//                 </div>
//             </div>
//             <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h3>When to Contact Us?</h3>
//                 <p>Reach out to us for any event-related inquiries, bookings, or custom event planning.</p>
//                 <p>We are available {contactInfo.workingHours}.</p>
//             </div>
//         </div>
//     );
// }

// export default ContactUs;






































