import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
  
  const APP_ID = 'b5aabfc3';
  const APP_KEY = 'c7b0d22dad0accdea6db206bd8ac51a5';
  const requestUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id={APP_ID}&app_key={APP_KEY}`;
  
  // const[counter, setCounter] = useState(0);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  //create a state that submits search and fetch after button is clicked/ submitted
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query]); //search here runs every second

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);
    console.log(data.hits);

// or
    // fetch(https://urlthaturfetchingfrom)
    // .then(response => {
    //   response.json
    // })
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(search);
    //updates after we type 
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search); 
    //its updated with search but gets updated after submit is hitted
    setSearch('');
  }
  
  return(
    <div className="App">
      <h1 className="title">React Recipe Blog</h1>
      <form 
        onSubmit={getSearch}
        className="search-form">
        <input className="search-bar" type="text" value={search}
        onChange={updateSearch} />
          <button className="search-button"
          type="submit" >
            Search
          </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        // key={recipe.recipe.label} //so all child list is unique
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} 
        /> //all 20 recipes in array are map to items on the recipe component then they are displayed
      ))};
      </div>
    </div>
  );
};

export default App;
