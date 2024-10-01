import React from 'react';
import "./Apartment.scss";
import { Link } from "react-router-dom";

function Apartment() {
    return (
        <Link to="/locations">
            <div className='apartment'>
                <div className='subtitle'>Titre de la location</div>
            </div>
        </Link>
    )
}

export default Apartment