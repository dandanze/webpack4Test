import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Website from './page/website/app.vue';
import BigData from './page/bigData/app.vue';
const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'*',
            component:Website
        },
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
 