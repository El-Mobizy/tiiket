import { createBoard } from '@wixc3/react-board';
import { Dashboard } from '../../components/dashboard/dashboard';

export default createBoard({
    name: 'Dashboard',
    Board: () => (
        <>
            <Dashboard />
        </>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1160.765625,
        windowWidth: 1094,
    },
});
