import React, { Component } from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'


const BreadBottom = styled.div`
height: 13%;
width: 80%;
background: linear-gradient(#F08E4A, #e27b36);
border-radius: 0 0 30px 30px;
box-shadow: inset-15px 0 #c15711;
margin: 2% auto;
`

const BreadTop = styled.div`
    height: 20%;
    width: 80%;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset-15px 0 #c15711;
    margin: 2% auto;
    position: relative;
`

/* const Seeds1 = styled.div`
width: 6%;
height: 6%;
position: absolute;
background-color: white;
left: 30%;
top: 50%;
border-radius: 40%;
transform: rotate(-20deg);
box-shadow: inset-2px-3px #c9c9c9;
&:after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;

}
&:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset-1px-3px #c9c9c9;
}
`




const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset-3px 0 #c9c9c9;

    &: before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  left: 150%;
  top: -130%;
  border-radius: 40%;
  transform: rotate(90deg);
  box-shadow: inset 1px 3px #c9c9c9;
}
` */
const Meat = styled.div`
    width: 80%;
    height: 8%;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
}
`


const Salad = styled.div`
    width: 85%;
    height: 7%;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
`

const Cheese = styled.div`
    width: 90%;
    height: 4.5%;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
    `

const Bacon = styled.div`
        width: 80%;
        height: 3%;
        background: linear-gradient(#bf3813, #c45e38);
        margin: 2% auto;
    `

class BurgerIngredient extends Component {


    render() {
        console.log("ingredient")

        let ingredient = null;



        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <BreadBottom />;
                console.log('breadbottom')
                break;
            case ('bread-top'):
                ingredient = (
                    <>
                        <BreadTop />
                        {/* <Seeds1 />
                        <Seeds2 /> */}
                    </>
                )
                console.log('top')
                break;
            case ('meat'):
                ingredient = <Meat />
                break;
            case ('cheese'):
                ingredient = <Cheese />
                break;
            case ('bacon'):
                ingredient = <Bacon />
                break;
            case ('salad'):
                ingredient = <Salad />
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropType.string.isRequired
}


export default BurgerIngredient;
