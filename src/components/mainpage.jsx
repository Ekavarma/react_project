import React from "react";
import "../styles/Gallery.css"


const eventList = [
  {
    img: "assets/sangeeth.png",
    text: "Large-scale events where professionals come together to discuss industry trends, share knowledge, and network.",
  },
  {
    img: "assets/conference.jpg",

    text: "Smaller, interactive events focused on education and skill-building.",
  },
  {
    img: "https://media.weddingz.in/images/16ab8276a8bfa26550f679e8e6963687/best-wedding-reception-halls-in-patna-you-will-absolutely-fall-in-love-with.jpg",
    text: "Celebratory events held after a couple gets engaged, where friends and family come together to mark the occasion.",
  },
  {
    img: "assets/bride.jpg",
    
    text:"Parties held for the bride or groom before the wedding, typically involving friends and fun activities."
  },
  {
    img:"https://5.imimg.com/data5/TestImages/XZ/VV/BD/SELLER-42740942/sagai.jpg",
    text:"A celebration following the ceremony where guests enjoy food, music, dancing, and celebrate the newlyweds."
  },{
    img:"https://cdn2.stylecraze.com/wp-content/uploads/2021/06/204-Best-And-Romantic-Wedding-Anniversary-Wishes-For-Wife.jpg.webp",
    text:"Celebrations marking milestones in a couple's marriage."
  },{
    img:"https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg",
    text:"Celebrating someone's birthday with friends and family."
  },{
    img: "assets/housewarming.jpg",

    text:"Celebrations held when someone moves into a new home"
  },{
    img: "assets/gettogather.jpg",

    text:"Gatherings of old friends, classmates, or family members to reconnect."
  },{
    img: "assets/haldi.jpg",

    text:"A joyous pre-wedding ritual where turmeric is applied to the bride and groom for purification, blessings, and beautification, accompanied by music, dance, and laughter."
  },{
    img: "assets/prewedding1.jpg",

    text:"A series of celebrations like engagement, Mehendi, Sangeet, bridal shower, and bachelor/bachelorette parties, marking the build-up to the wedding with fun, bonding, and traditional rituals."
  }
  
];
















function Gallery() {

  return (
  
    <>
  
    <div className="container mt-4" id="gallery">
    <h1>Gallery</h1>
      <div className="row">
        {eventList.map((event, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={event.img}
                className="card-img-top"
                alt="Event Image"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text">{event.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Gallery;
