import React from 'react'
import './ApartmentPage.scss'


export function ApartmentPage() {
    return (
        <div className='Apartment-page'>
            <div className='apart-banner'>
                <img src='src\assets\images\imgApropos.png' alt='Photos appartements' />
            </div>
            <div className="apartment_title">
                <h1> Crazy loft on Canal Saint Martin</h1>
                <h2>Paris Ile de France</h2>
                <div className="tags">
                    <p>Cozy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
            </div>
            <div className="apartment_owner">
                <h3>Alexandre Dumas</h3>
                <div className="apartment_owner_badge"></div>
                <div className="apartment_owner_stars">
                    <span>✰</span>
                    <span>✰</span>
                    <span>✰</span>
                    <span>✰</span>
                    <span>✰</span>
                </div>

            </div>
            <div className="apartment_informations">
                <div className="apartment_description">
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem magni at veniam dolorum, similique hic, expedita maiores ea ipsa aliquam odio vel in corporis et ipsum quae tenetur rem reprehenderit distinctio.
                        Culpa earum sed eaque quasi? Iure, suscipit eius in vero illo nemo minus ex? Vel ducimus placeat at ullam.
                    </p>
                </div>
                <div className="apartment_description">
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem magni at veniam dolorum, similique hic, expedita maiores ea ipsa aliquam odio vel in corporis et ipsum quae tenetur rem reprehenderit distinctio.
                        Culpa earum sed eaque quasi? Iure, suscipit eius in vero illo nemo minus ex? Vel ducimus placeat at ullam.
                    </p>
                </div>
            </div>





        </div>
    )
}

