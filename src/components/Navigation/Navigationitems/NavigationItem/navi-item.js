import React from 'react'
import styled from 'styled-components'
import media from '../../../Burger/media'

const NavigationItem = (props) => {

    const { active } = styled.div`
background-color: #8F5C2C;
border-bottom: 4px solid #40A4C8;
color:white;
`

    const A = styled.a`
   

    
    
    ${props.active ? active : null}
    color: white;
    
    height;: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizieng:border-box;
    dieplay: block;
    
    &:hover{
        background-color: #8F5C2C;
        border-bottom: 4px solid #40A4C8;
        color:white;
    }
    &:active{
        background-color: #8F5C2C;
        border-bottom: 4px solid #40A4C8;
        color:white;
    }
    &.active{
    }

     ${media.lessThan("sm")`

    ${props.active ? active : null}
    color: #8F5C2C;
    width: 100%;
    text-decoration: none;
    display: block;
    box-sizing: border-box;

    &:hover{
        
        color:#40A4C8;
    }
    &:active{
       
        color:#40A4C8;
    }
    &.active{
    }
     color : #40A4C8;
     width:100%;
     display: block;

    `}
    `
    const K = styled.div`
    margin:  0;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    align-items: center;
     ${media.lessThan('sm')`
     margin: 10px 0;
     width: auto;
     display: flex;
     align-items: center;
     ` } `


    return (<>
        <K><A href="/">{props.children}</A></K>
    </>
    )
}






export default NavigationItem;