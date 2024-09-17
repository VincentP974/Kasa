import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (<nav className='navbar'>
        <div className='navbar_logo'>
            <img src="src\assets\images\logoKasa.png" alt="Logo Kasa" />
        </div>
        <div>Acceuil</div>
        <div>A propos</div>

    </nav>
    );
}

export default Navbar;
