export interface UserTicketCounterProps {
    className?: string;
    children?: React.ReactNode;
}

export const UserTicketCounter = ({
                                      children = 'UserTicketCounter',
                                  }: UserTicketCounterProps) => {
    return <div className='flex justify-between gap-4'>
        <div>
            <h3 className='text-2xl font-semibold text-gray-600'>5</h3>
            <span>Open</span>
        </div>
        {/*<div>*/}
        {/*    <h3 className='text-2xl font-semibold text-gray-600'>8</h3>*/}
        {/*    <span>Unsolved</span>*/}
        {/*</div>*/}
        <div>
            <h3 className='text-2xl font-semibold text-gray-600'>3</h3>
            <span>Closed</span>
        </div>
    </div>;
};
