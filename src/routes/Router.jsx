import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <App />
                <Footer />
            </>
        ),
        errorElement: <h1>404 not found</h1>
    },
    {
        path: "/ApartmentGrid",
        element: (
            <>
                <Navbar />
                <h1>Nos appartements</h1>
                <Footer />

            </>
        )
    },
])

function Router() {
    return (
        <div>Router</div>
    )
}

export default Router