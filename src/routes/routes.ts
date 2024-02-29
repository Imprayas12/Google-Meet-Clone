const routes = [
    {
        path: '/',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/register',
        component: () => import('../pages/Auth.vue')
    }
]

export default routes;