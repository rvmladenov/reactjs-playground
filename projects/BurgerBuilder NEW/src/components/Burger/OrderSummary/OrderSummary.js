import React from 'react';
import Aux from '../../../hoc/_Aux';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CONTINUE</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CHECKOUT</Button>
        </Aux>
    );
}


export default orderSummary;