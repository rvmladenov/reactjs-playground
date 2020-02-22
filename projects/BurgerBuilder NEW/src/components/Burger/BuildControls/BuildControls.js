import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h3>Total price: ${ Math.abs(props.price.toFixed(2)) }</h3>
        {controls.map(control => (
            <BuildControl
                price={props.prices[control.type]}
                key={control.label}
                label={control.label}
                added={ () => props.ingredientAdded(control.type) }
                removed={ () => props.ingredientRemoved(control.type) }></BuildControl>

            ))}

            <button
                onClick={props.purchasing}
                className={classes.OrderButton}
                disabled={!props.purchasable}>ORDER NOW
            </button>
    </div>
);

export default buildControls;