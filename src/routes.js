import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Home/index'));



// Import all components
const CloudHosting = React.lazy(() => import('./pages/CloudHosting/index'));
const Partners = React.lazy(() => import('./pages/Home/partners'));
const Products = React.lazy(() => import('./pages/Products/index'));
const GetInvolved = React.lazy(() => import('./pages/Participate/index'));
const Blog = React.lazy(() => import('./pages/Blog/BlogGrid'));
const Articles = React.lazy(() => import('./pages/Blog/articles'));
const Developers = React.lazy(() => import('./pages/DeveloperPortal/landing/index'));
const Documentation = React.lazy(() => import('./pages/DeveloperPortal/documentation/index'));
const Contribute = React.lazy(() => import('./pages/Contribute/index'));



// Job Pages
const CommunityAdmin = React.lazy(() => import('./pages/Contribute/jobs/community-admin'));


const routes = [
    //routes without Layout




    // Landings
    { path: '/index-cloud-hosting', component: CloudHosting },
    { path: '/partners', component: Partners },
    { path: '/products', component: Products },
    { path: '/how-to-get-involved', component: GetInvolved },
    { path: '/blog', component: Blog },
    { path: '/articles', component: Articles },
    { path: '/developer-portal', component: Developers },
    { path: '/developer-portal-documentation', component: Documentation },
    { path: '/contribute', component: Contribute },



      // Job Pages
      { path: '/contribute-jobs1', component: CommunityAdmin },





    //Root
    { path: '/', component: Root, isWithoutLayout : true }

];

export default routes;
