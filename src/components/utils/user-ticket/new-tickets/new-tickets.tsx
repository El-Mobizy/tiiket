import { NewTicketCounter } from './new-ticket-counter/new-ticket-counter';
import StandardSelect from '../../standard-select/standard-select';
import { newTickeOptions } from '../../../../data';
import Table from './new-ticket-counter/Table';
import { useState } from 'react';

export interface NewTicketsProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewTickets = ({
    children = 'NewTickets',
}: NewTicketsProps) => {
    const [selectedOption, setSelectedOption] = useState('ALL');

    const handleOptionSelect = (value: string) => {
        setSelectedOption(value);
    };
    return (
        <section>
            <div className='lg:flex items-center justify-between py-2 border-og_blue border-b-2'>
                <NewTicketCounter />
                <StandardSelect onSelectOption={handleOptionSelect}
                                optionList={newTickeOptions}
                                placeHolder={'Filter by all project'} />
            </div>
            <Table selectedOption={selectedOption} />
        </section>
    );
};
