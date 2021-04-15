import React, { Component } from 'react'
import Aux from '../../hoc/auxx'
import styled from 'styled-components'
import Toolbar from '../Navigation/Toolbar'
import SideDrawer from '../../components/Navigation/Sidedrawer/sidedraw'


const Layoutfont = styled.main`
 margin-top: 72px;   
`

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    render() {
        console.log(this.sideDrawerClosedHandler.showSideDrawer)
        return (

            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <Layoutfont>
                    {this.props.children}
                </Layoutfont>
            </Aux>
        )
    }

}

export default Layout