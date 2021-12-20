import gummyBlack from '../img/gummyBlack.png'

let NavBar = () => {
    return(
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mx-5 mb-4 border-bottom sticky-top">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img className="bi" src={gummyBlack} alt='log' width="40" height="40" />
            </a>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <a href="none" className="nav-link px-2 link-light">Home</a>
                </li>
                <li>
                    <a href="none" className="nav-link px-2 link-light">About us</a>
                </li>
                <li>
                    <a href="none" className="nav-link px-2 link-light">Products</a>
                </li>
                <li>
                    <a href="none" className="nav-link px-2 link-light">Get in touch</a>
                </li>
            </ul>
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </header>
    );
}
export default NavBar;
