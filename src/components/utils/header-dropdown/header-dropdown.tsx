import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { GoSignOut, GoPerson, GoTools, GoQuestion, GoSun, GoBell } from 'react-icons/go';
import { FiMoreVertical, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { Avatar } from '../avatar/avatar';

export interface HeaderDropdownProps {
    className?: string;
    children?: React.ReactNode;
    isSideNavView?: boolean;
}

export const HeaderDropdown = ({
                                   children = 'HeaderDropdown',
                                   isSideNavView = false,
                               }: HeaderDropdownProps) => {
    const [theme, setTheme] = useState(false);
    return <div className='text-center'>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <div className={` ${isSideNavView ? 'text-white' : 'text-gray-400'} flex gap-3 items-center px-3 py-1`}>
                    <span className='hidden md:inline flex-grow text-lg text-left'>Radji</span>
                    {/*<span*/}
                    {/*    className={`rounded-full px-3 py-1 text-3xl text-center font-semibold ${isSideNavView ? 'text-og_blue bg-white' : 'text-white bg-og_blue'}`}>R</span>*/}
                    <Avatar isSideNavView={isSideNavView} avaterLetter={"R"}/>
                    <FiMoreVertical className={isSideNavView ? 'text-white' : 'text-gray-400'} />
                </div>

            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className='bg-white shadow-2xl w-100' sideOffset={5}>
                    <DropdownMenu.Item className='flex items-center gap-2 my-2 p-2 hover:text-og_blue hover:border-0'>
                        <GoPerson /> Profile
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='flex items-center gap-2 my-2 p-2 hover:text-og_blue hover:border-0'>
                        <GoTools /> Account settings
                    </DropdownMenu.Item>

                    <DropdownMenu.Item
                        className='md:hidden flex items-center gap-2 my-2 p-2 hover:text-og_blue hover:border-0'>
                        <GoBell /> Notifications <span
                        className='inline-flex items-center rounded-md bg-og_blue_2 text-red-700 px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10'>3</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        className='md:hidden flex items-center gap-2 my-2 p-2 hover:text-og_blue hover:border-0'>
                        <GoQuestion /> Support
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className='bg-og_blue_1 h-0.5' />
                    <DropdownMenu.CheckboxItem
                        className='md:hidden flex items-center gap-2 my-2 p-2 hover:text-og_blue hover:border-0'
                        checked={theme}
                        onCheckedChange={setTheme}>
                        <DropdownMenu.ItemIndicator className='DropdownMenuItemIndicator'>
                            <FiCheck />
                        </DropdownMenu.ItemIndicator>
                        Dark mode <GoSun />
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Item className='flex items-center gap-2 my-2 p-2 hover:text-og_blue hover:border-0'>
                        <GoSignOut /> Logout
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    </div>

};
