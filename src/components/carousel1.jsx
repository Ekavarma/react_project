import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/carousel1.css";

const carouselItems = [
    { src: "assets/indian wedding.png", alt: "Indian Wedding" },
    { src: "assets/eventmanagement.png", alt: "Event Management" },
    { src: "assets/music2.png", alt: "Music Event 2" },
    { src: "assets/music.png", alt: "Music Event" },
    { src: "assets/cristian wedding.png", alt: "Christian Wedding" },
    { src: "assets/wedding.png", alt: "Wedding" },
    { src: "assets/meeting.png", alt: "Meeting" }
];

function Carousel1() {
    const navigate = useNavigate(); 

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide position-relative" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={item.src} className="d-block w-100" alt={item.alt} />
                    </div>
                ))}
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h2 className="fw-bold">India’s Leading</h2>
                    <h2 className="fw-bold">Event & Wedding</h2>
                    <h2 className="fw-bold">Management Company</h2>
                    
                    
                    <button onClick={() => navigate("/Home")}>Let's Connect</button>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel1;











// import "../customcss/carousel1.css";

// const carouselItems = [
//     { src: "assets/indian wedding.png", alt: "Indian Wedding" },
//     { src: "assets/eventmanagement.png", alt: "Event Management" },
//     { src: "assets/music2.png", alt: "Music Event 2" },
//     { src: "assets/music.png", alt: "Music Event" },
//     { src: "assets/cristian wedding.png", alt: "Christian Wedding" },
//     { src: "assets/wedding.png", alt: "Wedding" },
//     { src: "assets/meeting.png", alt: "Meeting" }
// ];

// function Carousel1() {
    
//     return (
//         <div id="carouselExampleAutoplaying" className="carousel slide position-relative" data-bs-ride="carousel" data-bs-interval="3000">
//             <div className="carousel-inner">
//                 {carouselItems.map((item, index) => (
//                     <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                         <img src={item.src} className="d-block w-100" alt={item.alt} />
//                     </div>
//                 ))}
//                 <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
//                     <h2 className="fw-bold">India’s Leading</h2>
//                     <h2 className="fw-bold">Event & Wedding</h2>
//                     <h2 className="fw-bold">Management Company</h2>
                    
//                     <button >Let's Connect</button>
//                 </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//     );
// }

// export default Carousel1;
















