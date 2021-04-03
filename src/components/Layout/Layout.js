import React from 'react'
import Aux from '../../hoc/auxx'
import styled from 'styled-components'

const Layoutfont = styled.main`
 margin-top: 16px;   
`

const Layout = (props) => (
    <Aux>
        <div>
            Toolbar, SideDrawer,Backdrop
    </div>
        <Layoutfont>
            {props.children}
        </Layoutfont>
    </Aux>
)

export default Layout