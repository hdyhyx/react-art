import React, {Component, lazy, Suspense} from 'react'
import {Redirect} from 'react-router-dom'

const SuspenseComponents = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props} />
        </Suspense>
    )
}

const MyPage = lazy(() => import('../pages/my/'))
const ClassicPage = lazy(() => import('../pages/classic/'))
const BookPage = lazy(() => import('../pages/book/'))
export default [
    {
        path: '/',
        component: SuspenseComponents(ClassicPage),
        // path: '/',
        // component: Tab,
        // routes: [
        //     {
        //         path: '/',
        //         exact: true,
        //         render: () => <Redirect to={"/home"}/>
        //     },
        //     {
        //         path: '/home',
        //         component: SuspenseComponent(HomeComponents),
        //     },
        //     {
        //         path: '/product',
        //         component: SuspenseComponent(ProductComponents)
        //     },
        //     {
        //         path: '/cart',
        //         component: SuspenseComponent(CartComponents)
        //     },
        //     {
        //         path: '/my',
        //         component: SuspenseComponent(MyComponents),
        //     }
        // ]
    }

    // {
    //     path: '*',
    //     component: NotFound
    // }
]