import React from 'react'
import {renderRoutes} from 'react-router-config'
import {NavLink} from 'react-router-dom'
import {TabWrapper, TabItem} from './style'

function Tab(props) {
    const {route}=props
    return (
        <div>
            {renderRoutes(route.routes)}
            <TabWrapper>
                <NavLink to='/classic' activeClassName="selected">
                    <TabItem>
                        <span className="iconfont icon-round"></span>
                        <span >艺术</span>
                    </TabItem>
                </NavLink>
                <NavLink to='/book' activeClassName="selected">
                    <TabItem>
                        <span className="iconfont icon-usefull"></span>
                        <span>书籍</span>
                    </TabItem>
                </NavLink>
                <NavLink to='/my' activeClassName="selected">
                    <TabItem>
                        <span className="iconfont icon-square"></span>
                        <span >我的</span>
                    </TabItem>
                </NavLink>
            </TabWrapper>
        </div>
    )
}

export default React.memo(Tab)