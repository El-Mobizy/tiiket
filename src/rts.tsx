import React, { Suspense, lazy } from 'react';
import ScorllareaTest from './components/scorllarea-test/scorllarea-test';

// Lazy-loaded components
const Dashboard = lazy(() => import('./components/dashboard/dashboard'));
const NotFound = lazy(() => import('./components/not-found/not-found'));

const routes = [
    {
        path: '/404-page',
        element: (
            <Suspense fallback={<div></div>}>
                <NotFound />
            </Suspense>
        ),
    },
    {
        path: '/',
        element: (
            <Suspense fallback={<div></div>}>
                <Dashboard />
            </Suspense>
        ),
    },
    {
        path: '/scrollarea',
        element: (
            <Suspense fallback={<div></div>}>
                <ScorllareaTest />
            </Suspense>
        ),
    },
];

export default routes;
