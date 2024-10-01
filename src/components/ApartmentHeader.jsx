import React from 'react'
import "./ApartmentHeader.scss"

export function ApartmentHeader() {
    return (
        <div className="apartment_header">
            <div className="apartment_title">
                <h1> Cosy loft on Canal Saint Martin</h1>
                <h2>Paris Ile de France</h2>
                <div className="tags">
                    <span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
                </div>
            </div>
            <div className="apartment_owner">
                <div className="apartment_owner_details">
                    <h3>
                        <span>Alexandre</span>
                        <span>Dumas</span>
                    </h3>
                    <div className="apartment_owner_badge"></div>
                </div>
                <div className="apartment_owner_stars">
                    <span className='on'><i class="fa-solid fa-star"></i></span>
                    <span className='on'><i class="fa-solid fa-star"></i></span>
                    <span className='on'><i class="fa-solid fa-star"></i></span>
                    <span className='off'><i class="fa-solid fa-star"></i></span>
                    <span className='off'><i class="fa-solid fa-star"></i></span>
                </div>
            </div>

        </div>
    )
}

