import { createBoard } from '@wixc3/react-board';
import { StandardSelect } from '../../../components/utils/standard-select/standard-select';

export default createBoard({
    name: 'StandardSelect',
    Board: () => <StandardSelect />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 40,
    },
});
