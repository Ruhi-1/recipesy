import React, { Component } from "react";
import App from "../App/App";
// import {Link} from 'react-router-dom';
// import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
// import { getThemeProps } from '@material-ui/styles';
import ViewListItems from "../../components/ViewListItem/ViewListItem";

function ViewPage(props) {
  // console.log(`************************************************`,props)
  return (
    <>
      <div>
        <Header user={props.user} handleLogout={props.handleLogout} />
      </div>
      <div className="ItemListPage-grid">
        <h1>My Recipes</h1>
        {props.recipes.map(r => {
            return (
              <ViewListItems
                recipe={r}
                key={r._id}
                handleDeleteRecipe={props.handleDeleteRecipe}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default ViewPage;


// {props.recipes.map(recipe =>
//   recipe.map(r => {
//     return (
//       <ViewListItems
//         recipe={r}
//         key={r._id}
//         handleDeleteRecipe={props.handleDeleteRecipe}
//       />
//     );
//   })
// )}
