import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Contribute/index'));



// Import all components
const CloudHosting = React.lazy(() => import('./pages/CloudHosting/index'));
const Community = React.lazy(() => import('./pages/community/index'));
const Products = React.lazy(() => import('./pages/Products/index'));
const GetInvolved = React.lazy(() => import('./pages/Participate/index'));
const Blog = React.lazy(() => import('./pages/Blog/BlogGrid'));
const Articles = React.lazy(() => import('./pages/Blog/articles'));
const Developers = React.lazy(() => import('./pages/DeveloperPortal/landing/index'));
const Documentation = React.lazy(() => import('./pages/DeveloperPortal/documentation/index'));
const Contribute = React.lazy(() => import('./pages/Contribute/index'));
const About = React.lazy(() => import('./pages/About/index'));


// Job Pages
const CommunityAdmin = React.lazy(() => import('./pages/Contribute/jobs/community-admin'));
const PlacementProf = React.lazy(() => import('./pages/Contribute/jobs/placement-prof'));
const CommunityManager = React.lazy(() => import('./pages/Contribute/jobs/community-manager'));
const TaskManager = React.lazy(() => import('./pages/Contribute/jobs/task-manager'));
const Blogger = React.lazy(() => import('./pages/Contribute/jobs/blogger'));
const GraphicDesigner = React.lazy(() => import('./pages/Contribute/jobs/graphic-designer'));
const SocialMedia = React.lazy(() => import('./pages/Contribute/jobs/social-manager'));
const ChinaCommunity = React.lazy(() => import('./pages/Contribute/jobs/china-community'));
const ChineseTranslator = React.lazy(() => import('./pages/Contribute/jobs/chinese-translator'));
const ChineseSocial = React.lazy(() => import('./pages/Contribute/jobs/china-social'));
const ChineseContent = React.lazy(() => import('./pages/Contribute/jobs/china-content'));
const KoreaCommunity = React.lazy(() => import('./pages/Contribute/jobs/korea-community'));
const KoreaTranslator = React.lazy(() => import('./pages/Contribute/jobs/korea-translator'));
const KoreaSocial = React.lazy(() => import('./pages/Contribute/jobs/korea-social'));
const KoreaContent = React.lazy(() => import('./pages/Contribute/jobs/korea-content'));


const routes = [
    //routes without Layout




    // Landings
    { path: '/index-cloud-hosting', component: CloudHosting },
    { path: '/community', component: Community },
    { path: '/products', component: Products },
    { path: '/how-to-get-involved', component: GetInvolved },
    { path: '/blog', component: Blog },
    { path: '/articles', component: Articles },
    { path: '/developer-portal', component: Developers },
    { path: '/developer-portal-documentation', component: Documentation },
    { path: '/contribute', component: Contribute },
    { path: '/about', component: About },



      // Job Pages
      { path: '/community-admin', component: CommunityAdmin },
      { path: '/placement-prof', component: PlacementProf },
      { path: '/community-manager', component: CommunityManager },
      { path: '/task-manager', component: TaskManager },
      { path: '/blogger', component: Blogger },
      { path: '/graphic-designer', component: GraphicDesigner },
      { path: '/social-manager', component: SocialMedia },
      { path: '/china-community', component: ChinaCommunity },
      { path: '/chinese-translator', component: ChineseTranslator },
      { path: '/china-social', component: ChineseSocial },
      { path: '/china-content', component: ChineseContent },
      { path: '/korea-community', component: KoreaCommunity },
      { path: '/korea-content', component: KoreaContent },
      { path: '/korea-social', component: KoreaSocial },
      { path: '/korea-translator', component: KoreaTranslator },







    //Root
    { path: '/', component: Root, isWithoutLayout : true }

];

export default routes;
