import { createBoard } from '@wixc3/react-board';
import { NewTickets } from '../../../components/utils/user-ticket/new-tickets/new-tickets';

export default createBoard({
    name: 'NewTickets',
    Board: () => <NewTickets />,
    isSnippet: true,
});