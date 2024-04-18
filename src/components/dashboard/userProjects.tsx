import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';
import { dashboardProjects } from '../../data';
import { ProjectFolder } from '../utils/project-folder/project-folder';

export const UserProjects = () => {
    return (
        <>
            <h2 className='font-semibold text-gray-600 uppercase'>
                My Projects
            </h2>
            <ScrollAreaPrimitive.Root className='styled-scroll-area'>
                <ScrollAreaPrimitive.Viewport className='styled-viewport'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`flex ${dashboardProjects.length>4? 'justify-between gap-2':'gap-5'}`}
                    >
                        {dashboardProjects.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }} // Adjust the delay as needed
                            >
                                <ProjectFolder
                                    projectTitle={item.projectTitle}
                                    teamMembers={item.teamMembers}
                                    notificationCount={item.notificationCount}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </ScrollAreaPrimitive.Viewport>
                <ScrollAreaPrimitive.Scrollbar className='styled-scrollbar' orientation='vertical'>
                    <ScrollAreaPrimitive.Thumb className='styled-thumb' />
                </ScrollAreaPrimitive.Scrollbar>
                <ScrollAreaPrimitive.Scrollbar className='styled-scrollbar' orientation='horizontal'>
                    <ScrollAreaPrimitive.Thumb className='styled-thumb' />
                </ScrollAreaPrimitive.Scrollbar>
                <ScrollAreaPrimitive.Corner className='styled-corner' />
            </ScrollAreaPrimitive.Root>
        </>
    );
};