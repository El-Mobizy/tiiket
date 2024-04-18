import { createBoard } from '@wixc3/react-board';
import { UserTicketCounter } from '../../../components/utils/user-ticket/user-ticket-counter/user-ticket-counter';

export default createBoard({
    name: 'UserTicketCounter',
    Board: () => <UserTicketCounter />,
    isSnippet: true,
});