import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './tailwind.css';
import './reset.css';
import App from './App';
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import approutes from './AppRoutes';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;//'pk_test_bXV0dWFsLWJ1cnJvLTg3LmNsZXJrLmFjY291bnRzLmRldiQ';

if (!publishableKey) {
    throw new Error('Missing Publishable Key');
}

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement!);

const RootComponent = () => {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            publishableKey={publishableKey}
            navigate={navigate}
        >
            <Routes>
                <Route path='/' element={<App />} />
                <Route
                    path='/sign-in'
                    element={<SignIn redirectUrl='/dashboard' routing='path' path='/sign-in' />}
                />
                <Route
                    path='/sign-up'
                    element={<SignUp redirectUrl='/dashboard' routing='path' path='/sign-up' />}
                />
                {approutes.map((route) => (
                    <Route key={route.path} path={route.path} element={
                        <div>
                            <SignedIn>
                                <route.component />
                            </SignedIn>
                            <SignedOut>
                                <App />
                            </SignedOut>
                        </div>
                    } />
                ))}
            </Routes>
        </ClerkProvider>
    );
};

// Instead of calling createRoot() again, call root.render()
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RootComponent />
        </BrowserRouter>
    </React.StrictMode>,
);