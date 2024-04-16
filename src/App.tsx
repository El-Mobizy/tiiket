import {
    RouterProvider,
    createBrowserRouter, Outlet,
} from 'react-router-dom';
import { NotFound } from './components/not-found/not-found';
import { Suspense, useState } from 'react';
import routes from './rts';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const Layout = () => {
        return (
            <div className='app'>
                <Outlet />
            </div>
        );
    };
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: (
                <Suspense fallback={<div></div>}>
                    <NotFound />
                </Suspense>
            ),
            children: [...routes],
        },
    ]);
    return <RouterProvider router={router} />

}

export default App;
