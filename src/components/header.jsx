























function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    
                    <img src="assets/logo.jpg" alt="Logo" width="50" height="50" style={{ marginRight: "10px" }} />

                    <a className="navbar-brand" href="#carouselExampleAutoplaying">Home</a>
                    <a className="navbar-brand" href="#Aboutus">About us</a>
                    <a className="navbar-brand" href="#services">Services</a>
                    <a className="navbar-brand" href="#gallery">Gallery</a>
                    <a className="navbar-brand" href="#Contactus">Contact us</a>
                </div>
            </nav>
        </>
    );
}

export default Header;
