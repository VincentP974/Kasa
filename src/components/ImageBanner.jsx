import React, { useState } from 'react';
import "./ImageBanner.scss";

export function ImageBanner({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(0);

    const getClassName = (i) => {
        return i === currentPicture ? "show" : "";
    };

    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };

    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1);
            return;
        }
        setCurrentPicture(currentPicture - 1);
    };

    return (
        <div className='apart-banner'>
            <div className='image_container'>
                {pictures.map((pic, i) => (
                    <img
                        key={i} // Utilisation correcte de la clé ici
                        src={pic}
                        alt={`Apartment picture ${i + 1}`}
                        className={getClassName(i)}
                    />
                ))}
            </div>
            {/* Optionnel: Ajouter un bouton pour faire défiler les images */}
            <button className="btn btn-previous" onClick={moveToPrevious}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="btn btn-next" onClick={moveToNext}>
                <i className="fas fa-chevron-right"></i>
            </button>
            <span className="slide-counter">
                {currentPicture + 1} / {pictures.length}
            </span>

        </div>
    );
}