import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCardButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return (curNumber + item.amount);
    }, 0);


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return (() => {
            clearTimeout(timer);
        });
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {noOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCardButton;