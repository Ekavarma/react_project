import React from "react";
import "../styles/Header.css"

function Header({ onLoginClick }) {
  const navLinks = [
    { name: "Home", href: "#carouselExampleAutoplaying" },
    { name: "About us", href: "#Aboutus" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact us", href: "#Contactus" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src="assets/logo.jpg" alt="Logo" width="50" height="50" className="me-2" />
          <span className="navbar-brand">EVENTMANAGEMENT</span>
        </div>
        <div className="d-flex">
          {navLinks.map((link, index) => (
            <a key={index} className="navbar-brand" href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;









// import React from "react";
// import "../styles/Header.css"
// function Header({ onLoginClick }) {
//   const navLinks = [
//     {name:"EVENTMANAGEMENT"},
//     { name: "Home", href: "#carouselExampleAutoplaying" },
    
//     { name: "About us", href: "#Aboutus" },
//     { name: "Services", href: "#services" },
//     { name: "Gallery", href: "#gallery" },
//     { name: "Contact us", href: "#Contactus" },
//   ];

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <img
//           src="assets/logo.jpg"
//           alt="Logo"
//           width="50"
//           height="50"
//           style={{ marginRight: "10px" }}
//         />
//         {navLinks.map((link, index) =>
//           link.name === "Login" ? (
//             <a key={index} className="navbar-brand" href="#" onClick={(e) => { 
//                 e.preventDefault(); 
//                 onLoginClick(); 
//             }}>
//               {link.name}
//             </a>
//           ) : (
//             <a key={index} className="navbar-brand" href={link.href}>
//               {link.name}
//             </a>
//           )
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Header;
































// // function Header() {
// //     const logo = {
// //         src: "assets/logo.jpg",
// //         alt: "Logo",
// //         width: 50,
// //         height: 50
// //     };

// //     const navLinks = [
// //         { name: "Home", href: "#carouselExampleAutoplaying" },
// //         { name: "About us", href: "#Aboutus" },
// //         { name: "Services", href: "#services" },
// //         { name: "Gallery", href: "#gallery" },
// //         { name: "Contact us", href: "#Contactus" },
// //         { name:"Login",        href:"#login"     }
       

        
// //     ];

// //     return (
// //         <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //             <div className="container-fluid">
// //                 <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} style={{ marginRight: "10px" }} />
// //                 {navLinks.map((link, index) => (
// //                     <a key={index} className="navbar-brand" href={link.href}>{link.name}</a>
// //                 ))}
// //             </div>
// //         </nav>
// //     );
// // }

// // export default Header;























