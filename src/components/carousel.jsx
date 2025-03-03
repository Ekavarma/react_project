import "../customcss/Carousel1.css"
function Carousel1() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide position-relative" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src="assets/indian wedding.png" className="d-block w-100" alt="Carousel Image 1" />
                </div>
                <div className="carousel-item">
                    <img src="assets/eventmanagement.png" className="d-block w-100" alt="Carousel Image 2" />
                </div>
                <div className="carousel-item">
                    <img src="assets/music2.png" className="d-block w-100" alt="Carousel Image 3" />
                </div>
                <div className="carousel-item">
                    <img src="assets/music.png" className="d-block w-100" alt="Carousel Image 4" />
                </div>
                <div className="carousel-item">
                    <img src="assets/cristian wedding.png" className="d-block w-100" alt="Carousel Image 5" />
                </div>
                <div className="carousel-item">
                    <img src="assets/wedding.png" className="d-block w-100" alt="Carousel Image 6" />
                </div>
                <div className="carousel-item">
                    <img src="assets/meeting.png" className="d-block w-100" alt="Carousel Image 7" />
                </div>

                
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h2 className="fw-bold">India’s Leading</h2>
                    <h2 className="fw-bold">Event & Wedding</h2>
                    <h2 className="fw-bold">Management Company</h2>
                    <button className="custom-button">Let's Connect</button>
                </div>

            </div>

            {/* Carousel Controls */}
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













// function Carousel1(){
//     return(
//         <>
//          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//         <div className="carousel-inner">
//           <div className="carousel-item ">
//             <img src="assets/eventmanagement.png" className="d-block w-100" alt="Carousel Image 1" />
//           </div>
//           <div className="carousel-item active">
//             <img src="assets/indian wedding.png" className="d-block w-100" alt="Carousel Image 2" />
//           </div>
//           <div className="carousel-item">
//             <img src="assets/music2.png" className="d-block w-100" alt="Carousel Image 3" />
//           </div>
//           <div className="carousel-item">
//             <img src="assets/music.png" className="d-block w-100 h-100" alt="Carousel Image 4" />

//           </div>
//           <div className="carousel-item">
//             <img src="assets/cristian wedding.png" className="d-block w-100" alt="Carousel Image 5" />

//           </div>
//           <div className="carousel-item">
//             <img src="wedding.png" className="d-block w-100" alt="Carousel Image 6" />
//           </div>
//           <div className="carousel-item">
//             <img src="meeting.png" className="d-block w-100" alt="Carousel Image 7" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//         </>
//     )
// }
// export default Carousel1