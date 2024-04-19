import { useUser, SignIn, SignUp } from '@clerk/clerk-react';
import {
    Navigate,
    Outlet,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import App from './App';
import approutescopy from './AppRoutesCopy';
import { Dashboard } from './components';
import { Header } from './components/header';
import { Suspense } from 'react';
import { SideNav } from './components/utils/side-nav/side-nav';
import NotFound from './components/not-found/not-found';

const BaseRoutes = () => {
    const { user } = useUser();

    // I created a protected route here to check if there is a user. if there's no user, it will be redirected to the sign-in page
    // I also added setTimeout to makesure the user has been set before calling this function
    const ProtectedRoute = ({ children }: any) => {
        if (!user) {
            setTimeout(() => {
                return <Navigate to="/sign-in" />;
            }, 3000);
        }

        return children;
    };

    // instead of using the conventional Router provider, I made use of createBrowserRouter here to create my path and the elements
    // I also included the children componen so it can contain the rest of the routes and also wrapped with the protected component

    const routes = approutescopy.map((route) => ({
        path: route.path,
        element: (
            <ProtectedRoute>
                <Header />
                <main className="w-full relative flex overflow-auto mt-[100px]">
                    <SideNav />
                    <div className="md:ml-[250px] overflow-x-hidden mt-7 px-3 w-full">
                        <Suspense fallback={<div>Loading...</div>}>
                            {route.component}
                        </Suspense>
                    </div>
                </main>
            </ProtectedRoute>
        ),
    }));

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
        },
        {
            path: '/',
            children: routes,
        },
        {
            path: '/sign-in',
            element: <SignIn />,
            errorElement: <NotFound />,
        },
        {
            path: '/sign-up',
            element: <SignUp />,
            errorElement: <NotFound />,
        },
        {
            path: '/dash',
            element: <Dashboard />,
        },
    ]);

    // finally, I made use of the RouterProvider here in replicate of the BrowserRouter component, and I called the router component declared above.
    return <RouterProvider router={router} />;
};

export default BaseRoutes;
