import React, { Component } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    };

    handlePurchasing = () => {
        this.setState({purchasing: true})
    };

    updatePurchasable = (ingredients) => {
        const canPurchase = Object
            .keys(ingredients)
            .filter(ingredientKey => ingredients[ingredientKey] > 0 )
            .length > 0;
        
        this.setState({purchasable: canPurchase});
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return ;
        }

        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceSubstract = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubstract;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    purchaseContinueHandler = () => {
        alert('Purchase continue')
    };

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        price={this.state.totalPrice.toFixed(2)}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    price={this.state.totalPrice}
                    prices={INGREDIENT_PRICES}
                    purchasable={this.state.purchasable}
                    purchasing={this.handlePurchasing}
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientRemoved={this.removeIngredientHandler}></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;