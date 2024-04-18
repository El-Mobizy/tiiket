import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { newTicketTableData, teamMembersOptions } from '../../../../../data';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


interface Ticket {
    // reference: string;
    date: string;
    subject: string;
    project: string;
    projectType: string;
}
const animatedComponents = makeAnimated();
const QuickAssign = ({ onChange }: { onChange: (value: any) => void }) => {
    return (
        <div>
            <Select
                onChange={onChange} // Pass onChange handler
                placeholder={'Choose'}
                components={animatedComponents}
                options={teamMembersOptions}
            />
        </div>
    );
};
const columns = [

    {
        name: 'Quick Assign',
        cell: (ticket: Ticket) => <QuickAssign onChange={(value) => console.log(value)}/>,
        ignoreRowClick: true,
        allowOverflow: true,
    },

    {
        name: 'Date',
        selector: (ticket: Ticket) => ticket.date,
        sortable: true,
    },
    {
        name: 'Subject',
        selector: (ticket: Ticket) => ticket.subject,
        sortable: true,
    },
    {
        name: 'Project',
        selector: (ticket: Ticket) => ticket.project,
        sortable: true,
    },


];

const Table = ({ selectedOption }: { selectedOption: string }) => {
    const [filteredData, setFilteredData] = useState(newTicketTableData);
    useEffect(() => {
        if (selectedOption === 'ALL') {
            setFilteredData(newTicketTableData); // Show all data if selectedOption is 'ALL'
        } else {
            const filtered = newTicketTableData.filter((ticket) => ticket.projectType.toUpperCase() === selectedOption);
            setFilteredData(filtered);
        }
    }, [selectedOption]);

    return (
        <DataTable
            columns={columns}
            data={filteredData}
            pagination
            responsive
            striped
            highlightOnHover
            pointerOnHover
        />
    );
};

export default Table;