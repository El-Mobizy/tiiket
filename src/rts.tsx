import React, { lazy, Suspense } from 'react';

// Lazy-loaded components
const Dashboard = lazy(() => import('./components/dashboard/dashboard'));
const NotFound = lazy(() => import('./components/not-found/not-found'));

const routes = [

    {
        path: '/dashboard',
        element: (
            <Suspense fallback={<div></div>}>
                <Dashboard />
            </Suspense>
        ),
    },{
        path: '/another-link/:id',
        element: (
            <Suspense fallback={<div></div>}>
                <Dashboard />
            </Suspense>
        ),
    },

];

export default routes;
