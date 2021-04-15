import React from 'react'
import styled from 'styled-components'
import NavigationItem from '../Navigationitems/NavigationItem/navi-item'
import media from '../../Burger/media'

const NavigationItems = (props) => {
    return (
        <Ul>
            <NavigationItem
                link="/"
                active
            >Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </Ul>
    )
}

const Ul = styled.ul`

margin: 0;
padding:0;
list-style: none;
display: flex;
align-items: center;
height :100%;
flex-flow: column;
${media.lessThan("sm")`
    flex-flow: none;
`}
`



export default NavigationItems