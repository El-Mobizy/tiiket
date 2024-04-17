import { createBoard } from '@wixc3/react-board';
import { Avatar } from '../../../components/utils/avatar/avatar';

export default createBoard({
    name: 'Avatar',
    Board: () => <Avatar />,
    isSnippet: true,
});