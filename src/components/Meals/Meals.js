import { Fragment } from "react";
import MealSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";

const Meals = () => {
    return (
        <Fragment>
            <MealSummary></MealSummary>
            <MealsAvailable></MealsAvailable>
        </Fragment>
    );
};

export default Meals;