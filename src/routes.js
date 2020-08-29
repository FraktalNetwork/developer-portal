import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/DeveloperPortal/landing/index'));



// Import all components
const Documentation = React.lazy(() => import('./pages/DeveloperPortal/documentation/index'));


// Job Pages



const routes = [
    //routes without Layout




    // Landings
 { path: '/developer-portal-documentation', component: Documentation },


      // Job Pages








    //Root
    { path: '/', component: Root, isWithoutLayout : true }

];

export default routes;
