import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from '../Pages/HomePage.jsx';
import Footer from '../Layout/Footer.jsx';
import Navbar from '../Layout/Navbar.jsx';
import Main from '../Layout/Main.jsx';
import { ErrorPageNotFound } from "../Pages/ErrorPageNotFound.jsx";
import About from '../Pages/About.jsx';
import { ApartmentPage } from '../Pages/ApartmentPage.jsx';

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
const router = createHashRouter([
    {
        element: <HeaderFooterLayout />, // Layout général
        errorElement: <ErrorPageNotFound />, // 404 sans navbar/footer
        children: [
            {
                path: "/",
                element: <HomePage /> // Page principale
            },
            {
                path: "/locations/:id",
                element: (
                    <Main>
                        <ApartmentPage />
                    </Main>
                ) // Page "locations"
            },
            {
                path: "/about",
                element: (
                    <Main>
                        <About />
                    </Main>
                ) // Page "about"
            }
        ],
    },
]);

// App component
function App() {
    return <RouterProvider router={router} />;
}

export { router, App };