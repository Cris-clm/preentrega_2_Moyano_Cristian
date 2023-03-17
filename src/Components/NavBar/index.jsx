//código de barra de Navg.

import Widget from "../widget";
import "./navbar.css";



function NavBar() {
    return <div className="navbar">
        <div><Widget /></div>
        <ul className="menu">
            <li> <button>marcas de Cafè</button></li>
            <li> <button>Gustos</button></li>
            <li> <button>Precios</button></li>
        </ul>

    </div>;
}

export default NavBar;