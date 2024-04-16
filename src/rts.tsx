import React, { Suspense, lazy } from 'react';

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
];

export default routes;
