import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { SideNav } from '../components/utils/side-nav/side-nav';

export const ProtectedLayout = () => {
    return (
        <>
            <Header />
            <main className='w-full relative flex overflow-auto mt-[100px]'>
                <SideNav />
                <div className='md:ml-[250px] overflow-x-hidden mt-7 px-3 w-full'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        </>
    )
}

export default ProtectedLayout;