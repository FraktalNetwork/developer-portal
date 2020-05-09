import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Home/index'));



// Import all components
const CloudHosting = React.lazy(() => import('./pages/CloudHosting/index'));
const Partners = React.lazy(() => import('./pages/Home/partners'));
const Products = React.lazy(() => import('./pages/Products/index'));


const routes = [
    //routes without Layout




    // Landings
    { path: '/index-cloud-hosting', component: CloudHosting },
    { path: '/partners', component: Partners },
    { path: '/products', component: Products },





    //Root
    { path: '/', component: Root, isWithoutLayout : true }

];

export default routes;
