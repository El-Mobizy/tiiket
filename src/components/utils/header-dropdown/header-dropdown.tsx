import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { GoBell, GoPerson, GoQuestion, GoSignOut, GoSun, GoTools } from 'react-icons/go';
import { FiCheck, FiMoreVertical } from 'react-icons/fi';
import { useState } from 'react';
import { Avatar } from '../avatar/avatar';
import { SignOutButton, useUser } from '@clerk/clerk-react';

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
    const { user } = useUser();
    const getTruncatedAndFirstLetter = (text: string, maxLength: number): [string, string] => {
        const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
        const firstLetter = text.charAt(0);
        return [truncatedText, firstLetter];
    };
    const userFirstName = user?.fullName ?? user?.emailAddresses[0].emailAddress ?? '';
    const [truncatedText, firstLetter] = getTruncatedAndFirstLetter(userFirstName, 8);

    return <div className='text-center'>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <div className={` ${isSideNavView ? 'text-white' : 'text-gray-400'} flex gap-3 items-center px-3 py-1`}>
                    <span className='hidden md:inline flex-grow text-lg text-left'>{truncatedText}</span>
                    <Avatar isSideNavView={isSideNavView} avaterLetter={firstLetter.toUpperCase()} avaterFullname={user?.firstName}
                    />
                    <FiMoreVertical className={isSideNavView ? 'text-white' : 'text-gray-400'} />
                </div>

            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className='bg-white shadow-2xl w-100 z-50' sideOffset={5}>
                    <DropdownMenu.Item
                        className='flex items-center gap-2 my-2 p-2 text-sm text-gray-500  hover:outline-0'>
                        <span> {userFirstName}</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className='bg-og_blue_1 h-0.5' />
                    <DropdownMenu.Item className='header-dropdown-item'>
                        <a href='#'><GoPerson /> Profile</a>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        className='header-dropdown-item'>
                        <a href='#'><GoTools /> Account settings</a>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item
                        className='header-dropdown-item-mobile-only'>
                        <a href='#'>
                            <GoBell /> Notifications <span
                                className='notification-counter'>3</span>
                        </a>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        className='header-dropdown-item-mobile-only'>
                        <a href='#'><GoQuestion /> Support</a>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className='bg-og_blue_1 h-0.5' />
                    <DropdownMenu.CheckboxItem
                        className='header-mobile-theme-selector'
                        checked={theme}
                        onCheckedChange={setTheme}>
                        <DropdownMenu.ItemIndicator className='DropdownMenuItemIndicator'>
                            <FiCheck />
                        </DropdownMenu.ItemIndicator>
                        Dark mode <GoSun />
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Item className='hover:outline-0'>
                        <SignOutButton signOutCallback={() => { window.location.href = "/"; }}>
                            <button className='flex items-center gap-2 my-2 p-2 hover:text-og_blue hover:border-0'>
                                <GoSignOut /> Sign out
                            </button>
                        </SignOutButton>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    </div>;

};
