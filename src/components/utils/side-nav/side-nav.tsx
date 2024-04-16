import './side-nav.css';
import { sideNavItems } from '../../../data';
import { FiCheckSquare, FiGrid, FiUsers, FiPlus } from 'react-icons/fi';
import { GoSquareFill } from 'react-icons/go';
import { ProgressBar } from '../progress-bar/progress-bar';
import {progressData,statusData} from '../../../data';

export interface SideNavProps {
    className?: string;
    children?: React.ReactNode;
}

export const SideNav = ({ children = 'SideNav' }: SideNavProps) => {
    return (
        <aside className='hidden sm:flex flex-col justify-between bg-og_blue p-3 pt-5 side-nav'>
            <div>
                <button
                    className='flex gap-2 items-center bg-white text-og_blue px-3 py-1 rounded-full w-100 mx-auto font-medium hover:bg-og_blue_1 hover:text-white my-5'>
                    <FiPlus /> Create a project
                </button>
                <nav className='my-7'>
                    {sideNavItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className='flex justify-between mb-4 items-center md:text-xl text-white hover:text-og_blue_2'
                        >
                            <span className='flex gap-2 items-center'>
                                {item.icon === 'FiCheckSquare' && <FiCheckSquare />}
                                {item.icon === 'FiGrid' && <FiGrid />}
                                {item.icon === 'FiUsers' && <FiUsers />}
                                {item.text}
                                </span>
                            {item.canHoldBadge && <span
                                className='inline-flex items-center rounded-md bg-og_blue_2 text-red-700 px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10'>3</span>
                            }
                        </a>
                    ))}
                </nav>
            </div>
            <div className='lower-side-nav'>
                <div className='lower-side-nav-content'>

                    <div className='hidden md:inline'>
                        <div className='max-w-500 mx-auto px-3 py-1 text-sm text-white relative'>
                            <h2 className='hr-lines'>
                                Ticket by status
                            </h2>
                        </div>
                        {progressData.map((item, index) => (
                            <ProgressBar key={index} progressColor={item.color} progressNum={item.progress} />
                        ))}

                        <div className='flex gap-4 items-center w-100'>
                            {statusData.map((item, index) => (
                                <div key={index} className={`flex gap-2 items-center text-sm text-${item.color}`}>
                                    <GoSquareFill /> {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>

    );
};
