import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './tailwind.css';
import './reset.css';
import { ClerkProvider } from '@clerk/clerk-react';
import './firebase.js';
import BaseRoutes from './BaseRoutes';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) throw new Error('Missing Clerk Publishable Key');

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement!);

const Root = () => (
  <ClerkProvider publishableKey={publishableKey}>
    <BaseRoutes />
  </ClerkProvider>
);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

