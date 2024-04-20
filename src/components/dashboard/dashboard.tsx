import './dashboard.css';
import { UserTicket } from '../utils/user-ticket/user-ticket';
import { NewTickets } from '../utils/user-ticket/new-tickets/new-tickets';

export interface DashboardProps {
    className?: string;
    children?: React.ReactNode;
}

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:col-span-1 border-2 border-og_blue_2 p-3">
                <h2 className="title-text">My Tickets</h2>
                <UserTicket />
            </div>
            <div className="lg:col-span-1 border-2 border-og_blue_2 p-3">
                <h2 className="title-text">New Tickets</h2>
                <NewTickets />
            </div>
            <div className="lg:col-span-2 border-2 border-og_blue_2 p-3">
                <h2 className="title-text">My Tasks</h2>
            </div>
            <div className="lg:col-span-2 border-2 border-og_blue_2 p-3">
                <h2 className="title-text">Projects chart</h2>
            </div>
        </div>
    );
};


export default Dashboard;
