import './user-ticket.css';
import { UserTicketCounter } from './user-ticket-counter/user-ticket-counter';
import { userTickeOptions } from '../../../data';
import StandardSelect from '../standard-select/standard-select';
import Table from './Table';
import { useState } from 'react';

export interface UserTicketProps {
    className?: string;
    children?: React.ReactNode;
}

export const UserTicket = ({ children = 'UserTicket' }: UserTicketProps) => {
    const [selectedOption, setSelectedOption] = useState('ALL');

    const handleOptionSelect = (value: string) => {
        setSelectedOption(value);
    };
    return (
        <section>
            <div className='lg:flex items-center justify-between py-2 border-og_blue border-b-2'>
                <UserTicketCounter />
                <StandardSelect onSelectOption={handleOptionSelect}
                                optionList={userTickeOptions}
                                placeHolder={'Filter by all tickets'} />
            </div>
            <Table selectedOption={selectedOption} />
        </section>
    )
        ;
};
