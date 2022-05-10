import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>QuickMeals</h1>
            <HeaderCardButton onClick={props.onShowCart}></HeaderCardButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}></img>
        </div>
    </Fragment>
}

export default Header;