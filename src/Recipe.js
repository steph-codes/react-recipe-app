import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title, calories, image, ingredients}) =>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {/* this is another array so u need to map it
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))} */}
            </ul>
            <p className={style.itallic}>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}
{}
export default Recipe;