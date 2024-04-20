import { Dashboard } from './components';
import SampleComponent from './components/dashboard/SampleComponent';

const approutes = [
    {
        path: 'sample',
        component: <SampleComponent />,
    },
    {
        path: 'dashboard',
        component: <Dashboard />,
    },
];
export default approutes;
