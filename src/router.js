import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Website from './page/website/app';
import BigData from './page/website/app';
const router = new VueRouter({
    routes:[
        {
            path:'/website',
            component:Website
        },
        {
            path:'/bigData',
            component:BigData
        }
    ]
})

export default router;
 