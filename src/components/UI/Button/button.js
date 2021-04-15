import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    return (
        <Buttontype onClick={props.clicked}>{props.children} </Buttontype>//classes[classes.Button, classes[btnType].join(' ')]
    )
}

const Buttontype = styled.button`

    background - color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font - weight: bold;
    &:first-of-type{

        margin - left: 0;
        padding - left: 0;
    }

`

const Success = styled.div`
${Buttontype}
color: #5C9210;

`
const Danger = styled.div`
${Buttontype}
color: #944317;

`


export default Button;