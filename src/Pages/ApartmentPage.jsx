import React from 'react'
import { ApartmentDescription } from "../components/ApartmentDescription.jsx"
import './ApartmentPage.scss'
import { ApartmentHeader } from "../components/ApartmentHeader.jsx"


export function ApartmentPage() {
    return (
        <div className='Apartment-page'>
            <div className='apart-banner'>
                <img src='src\assets\images\imgApropos.png' alt='Photos appartements' />
            </div>
            <ApartmentHeader />
            <div className="apartment_informations">
                <ApartmentDescription />
                <ApartmentDescription />
            </div>





        </div>
    )
}

