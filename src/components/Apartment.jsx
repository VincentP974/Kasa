import React from 'react';
import "./Apartment.scss";
import { Link } from "react-router-dom";

function Apartment(props) {
    return (
        <Link to={`/locations/${props.id}`}>

            <div className='apartment'>
                <img src={props.imageUrl} alt='' />
                <div className='subtitle'>{props.title}</div>
            </div>
        </Link>
    );
}

export default Apartment;