import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) // Adding extra features!!
import store from './store'

const routeLoginGuard = (to, from, next) => {
    // Auto redirect to Login if NOT logged in
    if (store.state.profile !== '') {
        return next()
    } else {
        return next({name: 'Login'})
    }
}

const routes = [ // Route Configuration
    {
        name: 'Login',
        path: '/login',
        alias: '/',
        beforeEnter: (to, from, next) => {
            if (store.state.profile) { // Auto redirect to todos
                return next({name: 'Todos'})
            } else {
                return next()
            }
        },
        component: () => import(/* webpackChunkName: "login" */ './Login/Login.vue')
    },
    {
        path: '/todos',
        name: 'Todos',
        component: () => import(/* webpackChunkName: "todo-list" */ './Todo/TodoList.vue'),
        beforeEnter: routeLoginGuard
    },
    {
        path: '/create',
        name: 'CreateTodo',
        component: () => import(/* webpackChunkName: "create-todo" */ './TodoCreate/TodoCreate'),
        beforeEnter: routeLoginGuard
    },
    {
        path: '/todos/:id',
        name: 'TodoDetail',
        component: () => import(/* webpackChunkName: "todo-detail" */ './TodoDetail/TodoDetail.vue'),
        beforeEnter: routeLoginGuard
    }
];

const router = new VueRouter({
    routes
})

export default router

