import React from 'react'
import media from '../../Burger/media'
import styled from 'styled-components'
import Aux from '../../../hoc/auxx'
import Backdrop from '../Backdrop/backdrop'

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <Modal
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>{props.children}</Modal>
        </Aux>
    )

}
const Modal = styled.div`
position: fixed;
z-index: 500;
background-color: white;
width: 70%;
border: 1px solid #ccc;
box-shadow: 1px 1px 1px black;
padding: 16px;
left: 15%;
top: 30%;
box-sizing: border - box;
transition: all 0.3s ease-out;

${media.greaterThan("sm")`
width: 500px;
left: calc(50% - 250px);
`}
`



export default modal