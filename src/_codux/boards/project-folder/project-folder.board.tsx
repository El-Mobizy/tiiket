import { createBoard } from '@wixc3/react-board';
import { ProjectFolder } from '../../../components/utils/project-folder/project-folder';

export default createBoard({
    name: 'ProjectFolder',
    Board: () => <ProjectFolder />,
    isSnippet: true,
});