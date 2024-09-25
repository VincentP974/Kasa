import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../Pages/HomePage.jsx';
import Footer from '../Layout/Footer.jsx';
import Navbar from '../Layout/Navbar.jsx';
import Main from '../Layout/Main.jsx';
import { ErrorPageNotFound } from "../Pages/ErrorPageNotFound.jsx";
import About from '../Pages/About.jsx';

// Layout avec navbar et footer
const HeaderFooterLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> {/* Contenu des pages */}
            </main>
            <Footer />
        </>
    );
};

// Configuration du router
export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />, // Layout général
        errorElement: <ErrorPageNotFound />, // 404 sans navbar/footer
        children: [
            {
                path: "/",
                element: <HomePage /> // Page principale
            },
            {
                path: "/locations",
                element: (<Main>
                    <h1>Nos appartements</h1>
                </Main>) // Page "locations"
            },
            {
                path: "/about",
                element: (<Main>
                    <About />
                </Main>
                ) // Page "about"
            }
        ],
    },
]);