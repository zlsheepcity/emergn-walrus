let Routes = [

// ---------------------------- // project

    {
        component: () => import(
            /* webpackChunkName: "Welcome" */
                        '../views/Welcome.vue'),
            name:                'Welcome',
            path:               '/Welcome',
    },
    {
        component: () => import(
            /* webpackChunkName: "Home" */
                        '../views/Home.vue'),
            name:                'Home',
            path:               '/Home',
    },
    {
        component: () => import(
            /* webpackChunkName: "Module0" */
                        '../views/Module0.vue'),
            name:                'Module0',
            path:               '/Module0',
    },
    {
        component: () => import(
            /* webpackChunkName: "Module0-1" */
                        '../views/Module0-1.vue'),
            name:                'Module0-1',
            path:               '/Module0-1',
    },
    {
        component: () => import(
            /* webpackChunkName: "Module0-2" */
                        '../views/Module0-2.vue'),
            name:                'Module0-2',
            path:               '/Module0-2',
    },
    {
        component: () => import(
            /* webpackChunkName: "Module0-3" */
                        '../views/Module0-3.vue'),
            name:                'Module0-3',
            path:               '/Module0-3',
    },

// ---------------------------- // dev hq

    {
        component: () => import(
            /* webpackChunkName: "Dev_home" */
                         '../dev/_home.vue'),
            name:                'Dev_home',
            alias:              '/Dev_home',
            path:               '/',
    },

    {
        component: () => import(
            /* webpackChunkName: "Dev_blog" */
                         '../dev/_blog.vue'),
            name:                'Dev_blog',
            path:               '/Dev_blog',
    },

    {
        component: () => import(
            /* webpackChunkName: "Dev_blogpost" */
                         '../dev/_blog.vue'),
            name:                'Dev_blogpost',
            path:               '/Dev_blog/:pageid',
            props: true, // props = [ ...props, 'pageid' ]
    },

// ---------------------------- // dev log

    {
        component: () => import(
            /* webpackChunkName: "SetFocus" */
                          '../dev/SetFocus.vue'),
            name:                'SetFocus',
            path:               '/SetFocus',
    },

// ---------------------------- //

]

// ---------------------------- 404

Routes = [ ...Routes,
    {
        path:  '/page-not-found',
        alias: '/*',
        component: { render: (h) => h('div', ['404-vue, Page Not Found In Framework']) },
        meta: {
            requiresAuthorisation: false,
        },
    } ]

// ---------------------------- export ready

export default Routes
