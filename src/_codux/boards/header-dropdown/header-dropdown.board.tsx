import { createBoard } from '@wixc3/react-board';
import { HeaderDropdown } from '../../../components/utils/header-dropdown/header-dropdown';

export default createBoard({
    name: 'HeaderDropdown',
    Board: () => <HeaderDropdown />,
    isSnippet: true,
});