import React from 'react'
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {GlobalStyle} from './common/css/style'
import {IconFont} from './common/font/iconfont'
import routes from './router/index'

function App() {
    return (
        <div className="App">
            <HashRouter>
                <GlobalStyle/>
                <IconFont/>
                {
                    renderRoutes(routes)
                }
            </HashRouter>
        </div>
    );
}

export default App;
