import { createBoard } from '@wixc3/react-board';
import { SideNav } from '../../../components/utils/side-nav/side-nav';

export default createBoard({
    name: 'SideNav',
    Board: () => <SideNav />,
    isSnippet: true,
  
});
