import React from 'react'
import styled from 'styled-components'
import Logo from '../LOGO/logo'
import NavigationItems from '../Navigation/Navigationitems/navigationitems'
import media from '../Burger/media'

const Toolbarstyle = styled.div`
    height: 56px;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    background-color: #703809;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
    
`

const Desktop = styled.div`
${media.lessThan("sm")`
    display: none;
    `}
`

const Nav = styled.div`
    height: 100%;

`

const Logotool = styled.div`
    height: 80%;
`
const Toolbar = (props) => {
    return (
        <Toolbarstyle>
            <div>Menu</div>
            <Logotool>
                <Logo />
            </Logotool>

            <Nav>
                <Desktop>
                    <NavigationItems />
                </Desktop>
            </Nav>
        </Toolbarstyle>
    )

}

export default Toolbar;