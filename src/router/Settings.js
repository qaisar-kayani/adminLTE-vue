import Settings from "../views/pages/Setting/Settings";
import AuthMiddleware from '@/middleware/Auth';

export default [

    {
        name: 'Settings',
        path: '/settings',
        component: Settings,
        meta: {
            title: 'Settings',
            middleware: [AuthMiddleware]
        }
    }
]
