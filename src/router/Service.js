import AuthMiddleware from '../middleware/Auth';
import Service from '../views/pages/service/index';
import ServiceAdd from '../views/pages/service/create';
import ServiceUpdate from '../views/pages/service/update';

export default[
    {
        name: 'Service',
        path: '/service',
        component: Service,
        meta:{title:'Service',middleware:[AuthMiddleware]}
    },
    {
        name: 'Service Add',
        path: '/service/create',
        component: ServiceAdd,
        meta:{title:'Service',middleware:[AuthMiddleware]}
        
    },
    {
        name: 'Service Edit',
        path: '/service/edit/:id',
        component: ServiceUpdate,
        meta:{title:'Service',middleware:[AuthMiddleware]},
        props:true
    }
]