import React from 'react'
import styled from 'styled-components'

//buildcontrols+less
const BuildControlsLess = styled.button`
    background-color: color: #D39952;
    color: white;
`

const Build = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    ${BuildControlsLess}
`

const Button = styled.button`
    display: flex;
    font: inherit;
    padding 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    online: none;
    &:disabled{
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default ;
        
    }
    &:hover:disabled{
        background - color: #AC9980;
        color: #ccc;
        cursor: not - allowed;

    }
    
`

const Label = styled.div`
padding: 10px;
font - weight: bold;
width: 80px;

`

//buildcontrols+ more
const BuildControlsMore = styled.button`
background-color: #8F5E1E;
color: white;

`


const BuildControl = (props) => {
    console.log('buildcontrols')
    //Buildcontrol = styled,div
    return (
        <Build>
            <Label>{props.label}</Label>
            <BuildControlsLess
                onClick={props.removed}
                disabled={props.disabled}
            >Less</BuildControlsLess>
            <BuildControlsMore onClick={props.added}>More</BuildControlsMore>
        </Build>)


}

export default BuildControl

/*   .BuildControl button: disabled {
  }

.BuildControl button: hover: disabled {
}

.Label {
}

.BuildControl.Less {
  background color: #D39952;
  color: white;
}

.BuildControl.More {
}
*/