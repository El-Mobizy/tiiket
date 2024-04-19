import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './tailwind.css';
import './reset.css';
import { ClerkProvider } from '@clerk/clerk-react';
import './firebase.js';
import BaseRoutes from './BaseRoutes';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
    throw new Error('Missing Publishable Key');
}

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement!);

const RootComponent = () => {
    // I removed the useNavigation from react router dom as it will cause the application not to function well
    // because I am now using createBrowserRouter instead of the normal Router provider
    return (
        <ClerkProvider publishableKey={publishableKey}>
            {/* I imported and called the newly created BaseRoutes component here */}
            <BaseRoutes />
        </ClerkProvider>
    );
};

// Instead of calling createRoot() again, call root.render()
root.render(
    <React.StrictMode>
        {/* I removed the wrapped <BrowserRouter> component from this place and wrapped the RootComponent with just the Strictmode</BrowserRouter> */}
        <RootComponent />
    </React.StrictMode>
);
