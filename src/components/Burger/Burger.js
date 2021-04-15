import React from 'react'
import styled from 'styled-components'
import media from './media'
import BurgerIngredient from './BurgerIngredient/Ingredient'

/* burgerguilderの所からのプロップスを受け取っている */
const burger = (props) => {
    console.log(props)
    let transformedingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {//reduce隣り合う配列に関数arrを処理して単一の値にする。「」は初期値
            return arr.concat(el)
        }, [])//concat指定配列を現在の配列に連結
    console.log(transformedingredients)
    if (transformedingredients == 0) {
        console.log("not")
        transformedingredients = <p>Plese start-adding ingredient</p>
    }
    return (

        <Burger>
            <BurgerIngredient type="bread-top" />
            {transformedingredients}
            {/*  <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
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

${media.lessThan("xs")`
    width:350px;
    height:300px
`}

${media.between("md", "lg")`
    width:700px;
    height: 600px;
`}

${media.between("xs", "sm")`
    width:450px;
    height:400px
`}

${media.greaterThan("lg")`
    width:850px;
    height: 700px;
`}

`

export default burger;






