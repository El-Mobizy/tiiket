import { SignIn, SignUp, useSession, SignedIn, SignedOut } from '@clerk/clerk-react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import approutes from './AppRoutes';
import { Header } from './components/header';
import { Suspense } from 'react';
import { SideNav } from './components/utils/side-nav/side-nav';
import NotFound from './components/not-found/not-found';

const BaseRoutes = () => {
    const { isSignedIn } = useSession();
    const ProtectedRoute = ({ children }: any) => {
        return (
            <>
                <SignedIn>
                    {children}
                </SignedIn>
                <SignedOut>
                    <Navigate to='/sign-in' />
                </SignedOut>
            </>
        );
    };


    const routes = approutes.map((route) => ({
        path: route.path,
        element: (
            <ProtectedRoute>
                <Header />
                <main className='w-full relative flex overflow-auto mt-[100px]'>
                    <SideNav />
                    <div className='md:ml-[250px] overflow-x-hidden mt-7 px-3 w-full'>
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
            element: <main className='w-fit mx-auto mt-16'>
                <SignIn />
            </main>,
            errorElement: <NotFound />,
        },
        {
            path: '/sign-up',
            element: <main className='w-fit mx-auto mt-16'>
                <SignUp />
            </main>,
            errorElement: <NotFound />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default BaseRoutes;