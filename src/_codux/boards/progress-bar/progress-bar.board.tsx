import { createBoard } from '@wixc3/react-board';
import { ProgressBar } from '../../../components/utils/progress-bar/progress-bar';

export default createBoard({
    name: 'ProgressBar',
    Board: () => <ProgressBar />,
    isSnippet: true,
});