
function Header() {
    const logo = {
        src: "assets/logo.jpg",
        alt: "Logo",
        width: 50,
        height: 50
    };

    const navLinks = [
        { name: "Home", href: "#carouselExampleAutoplaying" },
        { name: "About us", href: "#Aboutus" },
        { name: "Services", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact us", href: "#Contactus" }
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} style={{ marginRight: "10px" }} />
                {navLinks.map((link, index) => (
                    <a key={index} className="navbar-brand" href={link.href}>{link.name}</a>
                ))}
            </div>
        </nav>
    );
}

export default Header;























