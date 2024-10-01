import React from 'react'
import AboutBaner from '../Layout/AboutBaner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import './About.scss'

function About() {
    return (
        <>
            <AboutBaner />
            <div className="about_container">
                <DescriptionPanel />
                <DescriptionPanel />
                <DescriptionPanel />
                <DescriptionPanel />
            </div>
        </>
    )
}

export default About