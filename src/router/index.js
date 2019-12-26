import React, {lazy, Suspense} from 'react'
import {Redirect} from 'react-router-dom'
import Tab from '../components/Tab/index'

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props} />
        </Suspense>
    )
}

const MyPage = lazy(() => import('../pages/My/'))
const ClassicPage = lazy(() => import('../pages/Classic/'))
const BookPage = lazy(() => import('../pages/Book/'))
export default [
    {
        path: '/',
        component: Tab,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to={"/classic"}/>
            },
            {
                path: '/classic',
                component: SuspenseComponent(ClassicPage),
            },
            {
                path: '/book',
                component: SuspenseComponent(BookPage)
            },
            {
                path: '/my',
                component: SuspenseComponent(MyPage),
            }
        ]
    }

    // {
    //     path: '*',
    //     component: NotFound
    // }
]