import React from 'react'
import styled from 'styled-components'
import BuildControl from './BuildControls/BuildControl'


const Controls = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow:0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;

`
const OrderButton = styled.button`

background-color: #DAD735;
outline: none;
cursor: pointer;
border: 1px solid #966909;
color: #966909;
font-family: inherit;
font-size: 1.2em;
padding: 15px 30px;
box-shadow: 2px 2px 2px #966909;
&:hover{
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
}
&:active{
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
}
&:disabled{
    
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
}
&:not(:disabled){
    animation: enable 0.3s linear;
    
}
}


`






/* @keyframes enable {
    0 % {
        transform: scale(1);
    }
    60 % {
        transform: scale(1.1);
    }
    100 % {
        transform: scale(1);
    }
} */

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
    return (
        <Controls>
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (

                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    //type={ctrl.type}//typeをここじゃなくて関数として渡せる理由
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <OrderButton
                disabled={props.purchaseable}
                onClick={props.ordered}>ORDER NOW</OrderButton>
        </Controls>//burgerbuilderから渡されてきたpropsをまたbuildcontrolに渡している
    )
}


export default BuildControls