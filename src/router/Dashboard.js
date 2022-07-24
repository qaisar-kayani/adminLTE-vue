import AuthMiddleware from '../middleware/Auth';
import Home from '../views/pages/dashboard/index';

export default[
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Home,
        meta:{title:'Dashboad',middleware:[AuthMiddleware]}
    }
]