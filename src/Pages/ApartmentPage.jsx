import React, { useEffect, useState } from 'react';
import { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import './ApartmentPage.scss';
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import { useParams } from "react-router-dom"; // Use useParams instead of useLocation
import { ImageBanner } from '../components/ImageBanner.jsx';

export function ApartmentPage() {
    const { id } = useParams(); // Get the apartment ID from the URL
    const [selectedLocation, setSelectedLocation] = useState(null); // State to store the selected apartment

    useEffect(fetchApartmentData, [id]); // Fetch data when the ID changes

    function fetchApartmentData() {
        fetch("/Kasa/Logements.json") // Ensure the path is correct
            .then((res) => res.json())
            .then((locations) => {
                // Find the apartment with the matching ID
                const selectedApartment = locations.find((loc) => loc.id === id);
                if (selectedApartment) {
                    setSelectedLocation(selectedApartment);
                } else {
                    // If the apartment is not found, redirect to the 404 page
                    window.location.href = "/404";
                }
            })
            .catch(console.error);
    }

    // Display a loading message while fetching data
    if (!selectedLocation) return <div>...loading</div>;

    return (
        <div className='Apartment-page'>
            {/* Display apartment details once data is loaded */}
            <ImageBanner pictures={selectedLocation.pictures} />
            <ApartmentHeader selectedLocation={selectedLocation} />
            <div className="apartment_informations">
                <DescriptionPanel title="Description" content={selectedLocation.description} />
                <DescriptionPanel
                    title="Equipements"
                    content={selectedLocation.equipments.map((eq, i) => (
                        <li key={i}>{eq}</li>
                    ))}
                />
            </div>
        </div>
    );
}
