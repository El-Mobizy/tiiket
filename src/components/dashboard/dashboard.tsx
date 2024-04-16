import { Header } from '../header';
import { SideNav } from '../utils/side-nav/side-nav';

export interface DashboardProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dashboard = ({
                              children = 'Dashboard',
                          }: DashboardProps) => {
    return <>
        <Header />
        <main className='flex'>
            <SideNav />

        </main>
    </>;
};
export default Dashboard;
