export interface NewTicketCounterProps {
    className?: string;
    children?: React.ReactNode;
}

export const NewTicketCounter = ({
                                      children = 'UserTicketCounter',
                                  }: NewTicketCounterProps) => {
    return <div className='flex justify-between gap-4'>
        <div>
            <h3 className='text-2xl font-semibold text-gray-600'>2</h3>
            <span>My projects</span>
        </div>
        <div>
            <h3 className='text-2xl font-semibold text-gray-600'>1</h3>
            <span>Invited projects</span>
        </div>

    </div>;
};
