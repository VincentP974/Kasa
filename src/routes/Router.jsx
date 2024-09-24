import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Main from '../components/Main.jsx';

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
        errorElement: <h1>404 - Page non trouvée</h1>, // 404 sans navbar/footer
        children: [
            {
                path: "/",
                element: <App /> // Page principale
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
                    <h1>A propos</h1>
                </Main>
                ) // Page "about"
            }
        ],
    },
]);