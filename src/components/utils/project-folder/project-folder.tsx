import './project-folder.css';
import FolderDefaultSvg from '../../../assets/images/folder-default.svg';
import FolderSvg from '../../../assets/images/folder.svg';
import { GoBell } from 'react-icons/go';
import { Avatar } from '../avatar/avatar';
import { team_avatars } from '../../../data';

export interface ProjectFolderProps {
    className?: string;
    projectTitle?: string;
    teamMembers?: Array<any>;
    notificationCount?: number;
    children?: React.ReactNode;
}

export const ProjectFolder = ({
                                  children = 'ProjectFolder',
                                  projectTitle = 'Port autonoum de cot...',
                                  teamMembers = [],
                                  notificationCount = 2,
                              }: ProjectFolderProps) => {
    const teamMembersList = teamMembers.length === 0 ? team_avatars : teamMembers;

    return (
        <div className='project-folder relative'>
            <img
                src={FolderDefaultSvg}
                alt=''
                width='225'
                className='absolute top-0 z-10 folder'
            />
            <div className='absolute inset-y-0 left-0 w-full py-20 px-3 z-20'>
                <p className='text-xs font-semibold text-gray-600 uppercase hover:text-white'>
                    Project
                </p>
                <p className='font-semibold text-og_blue hover:text-white'>
                    {projectTitle}
                </p>
                <div className='flex items-center mt-3'>
                    <div className='flex-grow'>
                        <p className='text-xs font-semibold text-gray-600 uppercase hover:text-white'>
                            Team members
                        </p>
                        <div className='flex items-center gap-2'>
                            {teamMembersList.slice(0, 2).map((value, index) => (
                                <Avatar
                                    key={index}
                                    avaterLetter={value.userLetter}
                                    avatarImage={value.avatarImage}
                                    avaterFullname={value.avaterFullname}
                                />
                            ))}
                            {teamMembersList.length > 2 && (
                                <p className='font-bold text-sm text-og_blue hover:text-white'>
                                    +{teamMembersList.length - 2}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='text-2xl mr-5'>
                        <div className='static'>
                            {notificationCount > 0 && (
                                <div className='static hover:text-white'>
                                    <GoBell className='text-gray-400 w-6 h-6 inline-block hover:text-white' />
                                    <span
                                        className='absolute items-center rounded-md bg-og_blue_2 text-red-700 px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10;'>{notificationCount}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                  .project-folder:hover img.folder {
                    content: url(${FolderSvg});
                  }

                  .project-folder:hover p {
                    color: white;
                  }

                  .project-folder:hover .text-gray-400 {
                    color: white;
                  }
                `}
            </style>
        </div>
    );
};