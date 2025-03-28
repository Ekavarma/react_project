import "../styles/Aboutus.css"
function Aboutus() {
    const aboutText = "We are one of the leading Event Management & Wedding Planning companies in India. We are Event Plus and we celebrate your love, romance, success, money, health & wellbeing. By organizing powerful & unforgettable celebrations & events. We create your D-day, the best day and the best memory ever!";
    
    const images = [
        { src: "assets/parties2.jpg", alt: "Birthday Party" },
        { src: "assets/wedding1.jpg", alt: "Wedding Celebration" },
     
        { src: "assets/conference1.jpg", alt: "Business Conference" }
    ];

    return (
        <div id="Aboutus" style={{ textAlign: "center", padding: "20px" }}>
            <h1>About Us</h1>
            <p style={{ maxWidth: "800px", margin: "0 auto" }}>{aboutText}</p>
            
            <div 
                style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    justifyContent: "center", 
                    gap: "20px", 
                    marginTop: "20px" 
                }}
            >
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image.src} 
                        alt={image.alt} 
                        style={{ width: "100%", maxWidth: "300px", height: "auto" }} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Aboutus;





































