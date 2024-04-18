import { createBoard } from '@wixc3/react-board';
import { UserTicket } from '../../../components/utils/user-ticket/user-ticket';

export default createBoard({
    name: 'UserTicket',
    Board: () => <UserTicket />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 961,
    },
});
