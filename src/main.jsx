import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './routes/Router'; // Import the App component

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App /> {/* Render the App component */}
    </React.StrictMode>
);