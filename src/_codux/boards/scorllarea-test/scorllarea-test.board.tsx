import { createBoard } from '@wixc3/react-board';
import { ScorllareaTest } from '../../../components/scorllarea-test/scorllarea-test';

export default createBoard({
    name: 'ScorllareaTest',
    Board: () => <ScorllareaTest />,
    isSnippet: true,
});