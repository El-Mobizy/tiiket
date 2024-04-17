import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/clerk-react';
import { Header } from './components/header';
import { SideNav } from './components/utils/side-nav/side-nav';

function Layout() {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <Header />
            <main className='w-full relative flex overflow-auto'>
                <SideNav />
                <div className='flex-1 overflow-x-hidden mt-5 px-3'>
                    <Outlet />
                </div>
            </main>
        </>
    );
}

const UnsecureLayout = () => {
    return (
        <header className='header'>
            <div>
                <div>
                    <p>Clerk + React + React Router App</p>
                </div>
                <SignInButton afterSignInUrl='/dashboard' />
                <SignUpButton afterSignInUrl='/dashboard' />

            </div>
        </header>

    )
        ;
};

function App() {
    const { userId, isLoaded } = useAuth();
    return (
        <>
            <h2 className='text-7xl text-center font-bold w-1/2 mx-auto mt-7'>Welcome to the <span
                className='text-og_blue'>TIIKET</span> app built by
                developers for developers</h2>
            <div className='text-center my-7 flex gap-2 justify-center'>
                {userId == undefined && (
                    <SignInButton className="bg-og_blue text-white font-bold py-2 px-4 rounded-full w-32"
                                  afterSignInUrl='/dashboard' />
                )} {userId == undefined && (
                <SignUpButton className="bg-og_blue text-white font-bold py-2 px-4 rounded-full w-32"
                              afterSignInUrl='/dashboard' />
            )}
                {userId !== undefined && (
                    <UserButton />
                )}

            </div>
        </>
    );
}

export default App;
