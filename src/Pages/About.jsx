import React from 'react'
import AboutBaner from '../Layout/AboutBaner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import './About.scss'

function About() {
    return (
        <>
            <AboutBaner />
            <div className="about_container">
                <DescriptionPanel title= "Fiabilité" content= "voila"/>
                <DescriptionPanel title= "Respect" content= "voila"/>
                <DescriptionPanel title= "Service" content= "voila"/>
                <DescriptionPanel title= "Responsabilité" content= "voila"/>
            </div>
        </>
    )
}

export default About