function Aboutus() {
    const aboutText = "We are one of the leading Event Management & Wedding Planning companies in India. We are Event Plus and we celebrate your love, romance, success, money, health & wellbeing. By organizing powerful & unforgettable celebrations & events. We create your D-day, the best day and the best memory ever!";
    
    const images = [
        { src: "https://www.wanderglobe.org/wp-content/uploads/2019/08/Celebrate-21st-Birthday-Parties.jpg", alt: "Birthday Party" },
        { src: "http://www.dipakstudios.com/gallery/1535303839A36I8979-Edit.jpg", alt: "Wedding Celebration" },
        { src: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/07/856908-business-conference-istock.jpg", alt: "Business Conference" }
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





































