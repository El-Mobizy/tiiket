import { createBoard } from '@wixc3/react-board';
import { InputGroup } from '../../../components/utils/input-group/input-group';

export default createBoard({
    name: 'SearchInputGroup',
    Board: () => <InputGroup />,
    isSnippet: true,
});
