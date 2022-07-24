import AuthMiddleware from '../middleware/Auth';
import price from '../views/pages/price/index';
import priceAdd from '../views/pages/price/create';
import priceUpdate from '../views/pages/price/update';

export default[
    {
        name: 'price',
        path: '/price',
        component: price,
        meta:{title:'price',middleware:[AuthMiddleware]}
    },
    {
        name: 'price Add',
        path: '/price/create',
        component: priceAdd,
        meta:{title:'price',middleware:[AuthMiddleware]}
        
    },
    {
        name: 'price Edit',
        path: '/price/edit/:id',
        component: priceUpdate,
        meta:{title:'price',middleware:[AuthMiddleware]},
        props:true
    }
]