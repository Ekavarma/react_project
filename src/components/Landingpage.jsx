import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './landingpage.css'
import Services from './services';
import Aboutus from './aboutus';
import ContactUs from './contactus';
import Header from './header';
import Carousel1 from './carousel';
function Mainpage() {
  return (
    <>
      
      <Header/>
      <Carousel1/>
      
     
      <Services/>

      <div className="container mt-4" id="gallery">
        <div className="card-container" class="d-flex flex-row mb-3 flex-wrap">
        
          <div className="col-md-4">
            <div className="card">
              <img src="assets/sangeeth.png"className="card-img-top" alt="Event Image" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <p className="card-text">Large-scale events where professionals come together to discuss industry trends, share knowledge, and network.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://media.istockphoto.com/id/1408022364/photo/multicultural-designer-sharing-ideas-during-a-meeting.jpg?s=612x612&w=0&k=20&c=1NvbeeATBpkLdpbifvU95m-5c2BFP-EZChfAZaqFzfQ=" className="card-img-top" alt="Event Image" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <p className="card-text">Smaller, interactive events focused on education and skill-building.</p>
              </div>
            </div>
          </div>
          

          <div className="col-md-4">
            <div className="card">
              <img src="https://media.weddingz.in/images/16ab8276a8bfa26550f679e8e6963687/best-wedding-reception-halls-in-patna-you-will-absolutely-fall-in-love-with.jpg" className="card-img-top" alt="Event Image" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <p className="card-text">Celebratory events held after a couple gets engaged, where friends and family come together to mark the occasion.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRKE6d4unntHm6Wd6DmGmt5pPI7_aBrqM-g&s" class="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div class="card-body">
                <p class="card-text">Parties held for the bride or groom before the wedding, typically involving friends and fun activities.</p>

              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div class="card" >
              <img src="https://5.imimg.com/data5/TestImages/XZ/VV/BD/SELLER-42740942/sagai.jpg" class="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div class="card-body">
                <p class="card-text">A celebration following the ceremony where guests enjoy food, music, dancing, and celebrate the newlyweds.</p>

              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div class="card" >
              <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/06/204-Best-And-Romantic-Wedding-Anniversary-Wishes-For-Wife.jpg.webp" class="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div class="card-body">
                <p class="card-text">Celebrations marking milestones in a couple's marriage.</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div class="card" >
              <img src="https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg" class="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
              <div class="card-body">
                <p class="card-text">Celebrating someone's birthday with friends and family.</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div class="card" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsL6KEcofARdL8yVVJ2mHn-02XVZFcpmiUjw&s" class="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div class="card-body">
                <p class="card-text">Celebrations held when someone moves into a new home</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div class="card ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pAZ8MG_bqMsbtCy-w5R6j6uZ22RfsLlKvA&s" class="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div class="card-body">
                <p class="card-text">Gatherings of old friends, classmates, or family members to reconnect.</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div class="card" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNWbsEMZlOCeirtzpLEDWA7_FAY4cG6BZTA&s" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text"> A joyous pre-wedding ritual where turmeric is applied to the bride and groom for purification, blessings, and beautification, accompanied by music, dance, and laughter.</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div class="card" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BLOqLdVIsE7atVXBGJvTKeYg4UXGTix96w&s" class="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div class="card-body">
                <p class="card-text">A series of celebrations like engagement, Mehendi, Sangeet, bridal shower, and bachelor/bachelorette parties, marking the build-up to the wedding with fun, bonding, and traditional rituals.</p>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div>
        <Aboutus/>
      </div>
      <div>
        <ContactUs/>
      </div>
    </>
  );
}

export default Mainpage;

























// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// function Mainpage() {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Home</a>
//                     <a className="navbar-brand" href="#">About us</a>
//                     <a className="navbar-brand" href="#">Services</a>
//                     <a className="navbar-brand" href="#">Gallery</a>
//                     <a className="navbar-brand" href="#">Contact us</a>
//                 </div>
//             </nav>

//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54lsjq2aPo939jpN1Adxrdr1fYbShMSvBaw&s" className="d-block w-100 h-100" alt="Carousel Image 1" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://content.jdmagicbox.com/comp/mysore/t6/0821px821.x821.220222153619.h6t6/catalogue/srk-event-management-vijaynagar-4th-stage-mysore-photographers-p1lg7qaaye.jpg" className="d-block w-100 h-100" alt="Carousel Image 2" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.jpg?s=612x612&w=0&k=20&c=7LWTCxgrl-8VmX8J0YToQU69_HJeBhj47ufevbxQtFU=" className="d-block w-100 h-100" alt="Carousel Image 3" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://threebestrated.in/images/SilversandEventManagementIndiaPvtLtd-Kolkata-WB.jpeg" className="d-block w-100 h-100" alt="Carousel Image 4" />

//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvHXhgMSJxo3F0VTZjJux8Gu2ejhu2UawYoe1fKV66C7QRBAIWfYT3Cl7apuxXHHcDl4&usqp=CAU" className="d-block w-100" alt="Carousel Image 5"/>

//                     </div>
//                     <div className="carousel-item">
//                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjGC6ELj77v9xbxn82olgE_2MY2DJO6P7UA&s"  className="d-block w-100" alt="Carousel Image 6"/>
//                     </div>
//                     <div className="carousel-item">
//                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfxdMiBlV9Orc8sPuytwd_qeUNG5artw3Dw&s"   className="d-block w-100" alt="Carousel Image 7" />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//             <div class="card" style="width: 18rem;">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmi2YiWzAGOrtJ4dCcMHCV6Q94dYsOu9LI_w&s" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Large-scale events where professionals come together to discuss industry trends, share knowledge, and network.</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://media.istockphoto.com/id/1408022364/photo/multicultural-designer-sharing-ideas-during-a-meeting.jpg?s=612x612&w=0&k=20&c=1NvbeeATBpkLdpbifvU95m-5c2BFP-EZChfAZaqFzfQ="
//                          class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Smaller, interactive events focused on education and skill-building.</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://media.weddingz.in/images/16ab8276a8bfa26550f679e8e6963687/best-wedding-reception-halls-in-patna-you-will-absolutely-fall-in-love-with.jpg" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Celebratory events held after a couple gets engaged, where friends and family come together to mark the occasion.</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRKE6d4unntHm6Wd6DmGmt5pPI7_aBrqM-g&s" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Parties held for the bride or groom before the wedding, typically involving friends and fun activities.
//                     </p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://5.imimg.com/data5/TestImages/XZ/VV/BD/SELLER-42740942/sagai.jpg" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">A celebration following the ceremony where guests enjoy food, music, dancing, and celebrate the newlyweds.
//                     </p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/06/204-Best-And-Romantic-Wedding-Anniversary-Wishes-For-Wife.jpg.webp" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Celebrations marking milestones in a couple's marriage.</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Celebrating someone's birthday with friends and family.</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsL6KEcofARdL8yVVJ2mHn-02XVZFcpmiUjw&s" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Celebrations held when someone moves into a new home</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pAZ8MG_bqMsbtCy-w5R6j6uZ22RfsLlKvA&s" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">Gatherings of old friends, classmates, or family members to reconnect.</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00pv7CYHou4zsVjT-HEhnSbpwG6FZVo5QIfPYmFifbfKYAWj8Uhny3bxNRZBJQvX8wts&usqp=CAU" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text"> A joyous pre-wedding ritual where turmeric is applied to the bride and groom for purification, blessings, and beautification, accompanied by music, dance, and laughter.</p>
//                 </div>
//              </div>
//              <div class="card" style="width: 18rem;">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BLOqLdVIsE7atVXBGJvTKeYg4UXGTix96w&s" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                     <p class="card-text">A series of celebrations like engagement, Mehendi, Sangeet, bridal shower, and bachelor/bachelorette parties, marking the build-up to the wedding with fun, bonding, and traditional rituals.</p>
//                 </div>
//              </div>
//         </>
//     );
// }

// export default Mainpage;



























































