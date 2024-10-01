import React from 'react'
import { DescriptionPanel } from "../components/DescriptionPanel.jsx"
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
                <DescriptionPanel />
                <DescriptionPanel />
            </div>





        </div>
    )
}

