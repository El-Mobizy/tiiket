import * as Popover from '@radix-ui/react-popover';

export interface AvatarProps {
    className?: string;
    avaterLetter?: string;
    avaterFullname?: string | null;
    avatarImage?: string | null;
    isSideNavView?: boolean;
    children?: React.ReactNode;
}

export const Avatar = ({
                           children = 'Avatar',
                           isSideNavView = false,
                           avaterLetter = 'T',
                           avaterFullname = 'Username',
                           avatarImage = null,
                       }: AvatarProps) => {
    const avatarClass = isSideNavView ? 'text-og_blue bg-white' : 'text-white bg-og_blue';
    const avatarComponent = (
        <Popover.Root>
            <Popover.Trigger asChild>
                {avatarImage ? (
                    <img src={avatarImage} className='rounded-full w-11 h-11 border-2 border-og_blue_2' />
                ) : (
                    <span
                        className={`rounded-full px-3 py-1 text-3xl text-center font-semibold border-2 border-og_blue_2 ${avatarClass}`}>
          {avaterLetter}
        </span>
                )}
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className='w-full p-3 bg-white rounded-2xl shadow' sideOffset={5}>
                    {avaterFullname}
                    <Popover.Arrow className='bg-white text-white' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );

    return <>{avatarComponent}</>;
};
