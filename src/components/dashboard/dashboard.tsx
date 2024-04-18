import './dashboard.css';
import { Header } from '../header';
import { SideNav } from '../utils/side-nav/side-nav';
import { UserProjects } from './userProjects';
import { UserTicket } from '../utils/user-ticket/user-ticket';
import { NewTickets } from '../utils/user-ticket/new-tickets/new-tickets';


export interface DashboardProps {
    className?: string;
    children?: React.ReactNode;
}


export const Dashboard = ({ children = 'Dashboard' }: DashboardProps) => {
    return (
        <>
            <Header />
            <main className='w-full relative flex overflow-auto mt-[100px]'>
                <SideNav />
                <div className='md:ml-[250px] overflow-x-hidden mt-7 px-3 w-full'>
                    <UserProjects />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
                        <div className='lg:col-span-1 border-2 border-og_blue_2 p-3'>
                            <h2 className='title-text'>
                                My Tickets
                            </h2>
                            <UserTicket/>
                        </div>
                        <div className='lg:col-span-1 border-2 border-og_blue_2 p-3'>
                            <h2 className='title-text'>
                                Unassigned Tickets
                            </h2>
                            <NewTickets/>
                        </div>
                        <div className='lg:col-span-2 border-2 border-og_blue_2 p-3'>
                            <h2 className='title-text'>
                                My Tasks
                            </h2>
                        </div>
                        <div className='lg:col-span-2 border-2 border-og_blue_2 p-3'>
                            <h2 className='title-text'>
                                Projects chart
                            </h2>
                        </div>
                    </div>

                </div>
            </main>

        </>
    );
};

export default Dashboard;
