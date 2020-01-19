import React from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
// import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header';

// import '../Category/Category';

function ViewPage(props) {
    return (
      <div className="component">
          <div>
            <Header />
            <p align="center">View Recipes</p>
            <RecipeCard />

          </div>
      </div>
    );
  }
  
  export default ViewPage;