import React from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

// import '../Category/Category';

function ViewPage(props) {
    return (
      <div className="component">
       
          <div>
            <p align="center">View Recipes</p>
            <RecipeCard />

          </div>
      </div>
    );
  }
  
  export default ViewPage;