import React, { Component } from 'react'

import Aux from '../../hoc/auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/Burgercontrols/Buildcontrols'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/ordersummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
}

class BurgerBuilder extends Component {
    /* constructor(props){
        super(props);
        this.state ={}
    } */

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    };


    updatePurcalseState() {
        const ingredients = {
            ...this.state.ingredients
        }//ここは配列を作っている。作った配列をもとにしてめそっどを 操作
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)//隣同士の二つの要素を左から右へ関数ingredientsで処理して単一の値にする[]は初期値。mapと似たようなもの
        console.log(sum)
        this.setState({ purchaseable: sum < 0 })
        console.log(this.state.purchaseable)
    }


    //typeには指定されたingredientが入る
    addIngredientHandler = (type) => {
        console.log(type)
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
        this.updatePurcalseState();
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
        console.log("purchase")
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purChaseContinueHandler = () => {
        alert('you continue!')
    }

    remobeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purChaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.remobeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;