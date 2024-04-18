import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { userTicketTableData } from '../../../data';

interface Ticket {
    reference: string;
    date: string;
    subject: string;
    status: string;
    lastUpdate: string;
    project: string;
}

const columns = [
    {
        name: 'Ref',
        selector: (ticket: Ticket) => ticket.reference,
        sortable: true,
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
        name: 'Status',
        selector: (ticket: Ticket) => ticket.status,
        sortable: true,
    },
    {
        name: 'Project',
        selector: (ticket: Ticket) => ticket.project,
        sortable: true,
    },
    {
        name: 'Last Update',
        selector: (ticket: Ticket) => ticket.lastUpdate,
        sortable: true,
    },

];

const Table = ({ selectedOption }: { selectedOption: string }) => {
    const [filteredData, setFilteredData] = useState(userTicketTableData);
    useEffect(() => {
        if (selectedOption === 'ALL') {
            setFilteredData(userTicketTableData); // Show all data if selectedOption is 'ALL'
        } else {
            const filtered = userTicketTableData.filter((ticket) => ticket.status.toUpperCase() === selectedOption);
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
        />
    );
};

export default Table;