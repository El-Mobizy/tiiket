import './dashboard.css';
import { Header } from '../header';
import { SideNav } from '../utils/side-nav/side-nav';
import { UserProjects } from './userProjects';
import LayoutWrapper from '../../hoc/LayoutWrapper';

export interface DashboardProps {
    className?: string;
    children?: React.ReactNode;
}


export const Dashboard = ({ children = 'Dashboard' }: DashboardProps) => {
    return (
        <>
            <Header />
            <main className='w-full relative flex overflow-auto'>
                <SideNav />
                <div className='flex-1 overflow-x-hidden mt-14 px-3'>
                    <UserProjects />
                    <h2 className='font-semibold text-gray-600 uppercase'>
                        My Tickets
                    </h2>
                </div>
            </main>

        </>
    );
};

export default Dashboard;
