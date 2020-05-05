import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Home/index'));



// Import all components
const CloudHosting = React.lazy(() => import('./pages/CloudHosting/index'));
const Partners = React.lazy(() => import('./pages/Home/partners'));


const routes = [
    //routes without Layout




    // Landings
    { path: '/index-cloud-hosting', component: CloudHosting },
    { path: '/partners', component: Partners },





    //Root
    { path: '/', component: Root, isWithoutLayout : true }

];

export default routes;
