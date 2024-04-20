import { SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import approutes from './AppRoutes';
import { Dashboard } from './components';
import { Header } from './components/header';
import { Suspense } from 'react';
import { SideNav } from './components/utils/side-nav/side-nav';
import NotFound from './components/not-found/not-found';

const BaseRoutes = () => {
    const { user } = useUser();

    const ProtectedRoute = ({ children }: any) => (
        user ? children : <Navigate to="/" />
    );

    const routes = approutes.map(route => ({
        path: route.path,
        element: (
            <ProtectedRoute>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <main className="w-full relative flex overflow-auto mt-[100px]">
                        <SideNav />
                        <div className="md:ml-[250px] overflow-x-hidden mt-7 px-3 w-full">
                            {route.component}
                        </div>
                    </main>
                </Suspense>
            </ProtectedRoute>
        ),
    }));

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <NotFound />,
        },
        {
            path: "/",
            children: routes,
        },
        {
            path: "/sign-in",
            element: <SignIn />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default BaseRoutes;
