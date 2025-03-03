function ContactUs() {
    const contactInfo = {
        companyName: "Elite Events",
        tagline: "Crafting Unforgettable Moments",
        description: "At Elite Events, we believe that every celebration deserves a touch of elegance and perfection. With years of expertise in event planning, we specialize in weddings, corporate events, private parties, and live music entertainment. Whether it’s an intimate gathering or a grand affair, our team works tirelessly to bring your vision to life with seamless execution and creative excellence. From stunning décor and meticulous planning to world-class entertainment and flawless coordination, we ensure every detail is handled with professionalism and passion. Our commitment to delivering unique, memorable, and stress-free events has made us a trusted name in the industry.",
        address: "Elite Towers, 3rd Floor, MG Road, Bangalore, India – 560001",
        email: "eliteevent@gmail.com",
        phone: "+91 98480 22338",
        workingHours: "Monday to Saturday, 9:00 AM - 7:00 PM"
    };

    return (
        <div id="contactcus" style={{ background: "#1A1A2E", color: "white", padding: "20px" }}>
            <div style={{ textAlign: "center" }}>
                <h2>Contact Us</h2>
                <h3>{contactInfo.companyName} – {contactInfo.tagline}</h3>
                <p style={{ maxWidth: "800px", margin: "0 auto" }}>{contactInfo.description}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "30px", padding: "20px", flexWrap: "wrap" }}>
                <div style={{ textAlign: "center" }}>
                    <h3>Address</h3>
                    <p>{contactInfo.address}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h3>Connect</h3>
                    <p>Email: {contactInfo.email}</p>
                    <p>Phone: {contactInfo.phone}</p>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>When to Contact Us?</h3>
                <p>Reach out to us for any event-related inquiries, bookings, or custom event planning.</p>
                <p>We are available {contactInfo.workingHours}.</p>
            </div>
        </div>
    );
}

export default ContactUs;






































