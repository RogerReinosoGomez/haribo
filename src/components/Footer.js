import twitter from '../img/iconos/twitter.png'
import facebook from '../img/iconos/facebook.png'
import instagram from '../img/iconos/instagram.png'
import gummyBlack from '../img/gummyBlack.png'

let Footer = (informacion) => {
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mx-5 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img className="bi" src={ gummyBlack } alt='log' width="24" height="24" />
                </a>
                <span className="text-white">&reg; { informacion.ubicacion }</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-white" href="TablaDeUsuarios/">
                        <img className="bi" src={ facebook } alt='facebook' width="24" height="24" />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-white" href="none">
                        <img className="bi" src={ instagram } alt='instagram' width="24" height="24" />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-white" href="none">
                        <img className="bi" src={ twitter } alt='twitter' width="24" height="24" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;
