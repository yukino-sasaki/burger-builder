import React from 'react'
import burgerLogo from "../../assets/image/burger-logo.png"
import styled from 'styled-components'

const Logo = (props) => {
    return (<Logodiv style={{ height: props.height }}>
        <Img src={burgerLogo} alt="Myburger" />
    </Logodiv>
    )
}

const Logodiv = styled.div`
background-color:white;
padding:8px;
height: 80%;
box-sizing: border-box;
border-radius: 5px;

`

const Img = styled.img`
height:100%;
`
export default Logo;