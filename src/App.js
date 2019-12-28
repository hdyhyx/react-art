import React from 'react'
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { Provider } from 'react-redux'
import store from './store'
import {GlobalStyle} from './common/css/style'
import {IconFont} from './common/font/iconfont'
import routes from './router/index'

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <GlobalStyle/>
                <IconFont/>
                {
                    renderRoutes(routes)
                }
            </HashRouter>
        </Provider>
    );
}

export default App;
