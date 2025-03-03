import React from "react";

const eventList = [
  {
    img: "assets/sangeeth.png",
    text: "Large-scale events where professionals come together to discuss industry trends, share knowledge, and network.",
  },
  {
    img: "https://media.istockphoto.com/id/1408022364/photo/multicultural-designer-sharing-ideas-during-a-meeting.jpg?s=612x612&w=0&k=20&c=1NvbeeATBpkLdpbifvU95m-5c2BFP-EZChfAZaqFzfQ=",
    text: "Smaller, interactive events focused on education and skill-building.",
  },
  {
    img: "https://media.weddingz.in/images/16ab8276a8bfa26550f679e8e6963687/best-wedding-reception-halls-in-patna-you-will-absolutely-fall-in-love-with.jpg",
    text: "Celebratory events held after a couple gets engaged, where friends and family come together to mark the occasion.",
  },
  
];

function Gallery() {
  return (
    <div className="container mt-4" id="gallery">
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
  );
}

export default Gallery;
