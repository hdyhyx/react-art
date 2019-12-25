import React from 'react';
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {GlobalStyle} from './common/css/style'
import routes from './router/index'

function App() {
    return (
        <div className="App">
            <HashRouter>
                <GlobalStyle/>
                {
                    renderRoutes(routes)
                }
            </HashRouter>
        </div>
    );
}

export default App;
