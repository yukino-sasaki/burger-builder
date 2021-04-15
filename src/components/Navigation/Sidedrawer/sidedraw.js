import React from 'react'
import Logo from '../../LOGO/logo'
import NavigationItems from '../Navigationitems/navigationitems'
import styled from 'styled-components'
import media from '../../Burger/media'
import Backdrop from '../../UI/Backdrop/backdrop'
import Aux from '../../../hoc/auxx'

const SideDrawer = (props) => {
    /*  const Open = styled.div`
         transform: translateX(0);
     `
 
     const Close = styled.div`
        
         transform: translateX(-100%);
     ` */

    const Div = styled.div`
    position: fixed;
    width: 280px;
    height: 100%;
    left:0;
    top:0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${props => props.open ? 'translateX(0%)' : 'translateX(-100%)'}
     
  

    ${media.greaterThan('sm')`
        display: none;
       
    `}
    `
    const Close = styled(Div)`
      transform: translateX(-100%);
`
    const Open = styled(Div)`
      transform: translateX(0);
`

    const Logoside = styled.div`
        height: 11%;
        margin-bottom: 32px;
    
    `
    /*Layout 
       < SideDrawer
   open = { this.state.showSideDrawer }
   closed = { this.sideDrawerClosedHandler } /> */
    console.log(props.open)
    let attachedclass = <Close />
    if (props.open) {
        attachedclass = < Open />
    }
    return (

        <>
            <Aux>
                <Backdrop
                    show={props.open}
                    clicked={props.closed}

                />
                <div className={attachedclass}>
                    <Div>
                        <Logoside>
                            <Logo />
                        </Logoside>

                        <nav>
                            <NavigationItems />
                        </nav>
                    </Div>
                </div>

            </Aux>
        </>
    )
}// backdropで背景が黒くなっている。showを渡しているが、これは初期値がfalse？だと思われる

export default SideDrawer;