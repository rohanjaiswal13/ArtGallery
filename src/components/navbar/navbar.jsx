import './navbar.css'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">YourArt</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mr">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item mr">
                    <a className="nav-link" href="#">Shop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cart</a>
                </li>  
            </ul>
        </div>
    </div>
</nav>

    );
}

export default NavBar;