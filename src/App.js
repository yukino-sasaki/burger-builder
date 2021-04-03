import React, { Component } from 'react'
import './App.css';
import Layout from './components/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/Burgerbuilder'
//import styled from 'styled-components'

/* const Font = styled.Font`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap')


` */

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>

    )
  }
}


export default App;
