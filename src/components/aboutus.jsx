function Aboutus() {
    return (
        <div id="Aboutus" style={{ textAlign: "center", padding: "20px" }}>
            <h1>About Us</h1>
            <p style={{ maxWidth: "800px", margin: "0 auto" }}>
                We are one of the leading Event Management & Wedding Planning companies in India. 
                We are Event Plus and we celebrate your love, romance, success, money, health & wellbeing. 
                By organizing powerful & unforgettable celebrations & events. We create your D-day, 
                the best day and the best memory ever!
            </p>

            
            <div 
                style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    justifyContent: "center", 
                    gap: "20px", 
                    marginTop: "20px" 
                }}
            >
                <img 
                    src="https://www.wanderglobe.org/wp-content/uploads/2019/08/Celebrate-21st-Birthday-Parties.jpg" 
                    alt="Birthday Party" 
                    style={{ width: "100%", maxWidth: "300px", height: "auto" }} 
                />
                <img 
                    src="http://www.dipakstudios.com/gallery/1535303839A36I8979-Edit.jpg" 
                    alt="Wedding Celebration" 
                    style={{ width: "100%", maxWidth: "300px", height: "auto" }} 
                />
                <img 
                    src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/07/856908-business-conference-istock.jpg" 
                    alt="Business Conference" 
                    style={{ width: "100%", maxWidth: "300px", height: "auto" }} 
                />
            </div>
        </div>
    );
}

export default Aboutus;
























