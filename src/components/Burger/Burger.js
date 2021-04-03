import React from 'react'
import styled from 'styled-components'
import media from './media'
import BurgerIngredient from './BurgerIngredient/Ingredient'

const burger = (props) => {
    return (

        <Burger>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </Burger>


    )


}


const Burger = styled.div`
width:100%;
margin-top: auto;
height: 250px;
overflow: scroll;
text-align:center;
font-whight: bold;
font-size: 1.2rem;

${media.between("xs", "sm")`
    width:450px;
    height:400px
`}

`

export default burger;






