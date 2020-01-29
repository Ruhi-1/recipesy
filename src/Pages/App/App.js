import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import { Container } from '@material-ui/core';
import Nav from '../../components/Nav/Nav';
// import Header from '../../components/Header/Header';
import ViewPage from '../../Pages/ViewPage/ViewPage';
import AddPage from '../../components/AddPage/AddPage';
import userService from '../../utils/userService';
// import RecipePage from '../../components/RecipePage/RecipePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import HomePage from '../../components/HomePage/HomePage';
import AddButton from '../../components/AddButton/AddButton';
import * as recipeAPI from '../../services/recipes-api';


class App extends Component {
    state = {
      recipes: [],
      user: userService.getUser()
    };
  
  
    handleAddRecipe = async newRecipeData => {
      const newRecipe = await recipeAPI.create(newRecipeData, this.state.user);
      this.setState(state => ({
        recipes: [...state.recipes, newRecipe]
      }),
        // Using cb to wait for state to update before rerouting
        () => this.props.history.push('/viewpage'));
    }
  
    handleUpdateRecipe= async updatedRecipeData => {
      const updatedRecipe= await recipeAPI.update(updatedRecipeData);
      const newRecipesArray = this.state.recipes.map(r =>
        r._id === updatedRecipe._id ? updatedRecipe: r
      );
      this.setState(
        { recipes: newRecipesArray },
        () => this.props.history.push('/viewpage')
      );
    }
  
    handleDeleteRecipe= async id => {
      await recipeAPI.deleteRecipe(id);
      this.setState(state => ({
        // Yay, filter returns a NEW array
        recipes: state.recipes.filter(r => r._id !== id)
      }), () => this.props.history.push('/viewpage'));
    }


  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

 async componentDidMount() {
    const recipes = await recipeAPI.getAll();
    console.log("recipes", recipes)
    
    this.setState({recipes});
  }

  render() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() =>
        <Nav 
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
        }/>
        <Route exact path='/login' render={({ history }) =>
        <LoginPage 
        history={history}
        handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route exact path='/signup' render={({ history }) => 
        <SignupPage 
        history={history}
        handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route path="/viewpage" render={({ location }) => 
      <ViewPage 
      // handleLogout={this.handleLogout}
      location={location}
      user={this.state.user}
      recipes={this.state.recipes}
      handleDeleteRecipe={this.handleDeleteRecipe}

      />}
      
      />
      {/* recipes={this.state.recipes} */}
      {/* component={ViewPage} /> */}

      <Route exact path={"/addpage"} render={({history}) => 
      <AddPage 
      handleAddRecipe={this.handleAddRecipe}
      recipes={this.state.recipes}
      history={history}
      user={this.state.user}
      // email={this.user.email}
      />} 
      />
      <Route path={"/homepage"} component={HomePage} />
      {/* <Route path={"/viewpage"} component={AddButton} />  */}
        <div>
          {/* <ViewPage /> */}
        </div>
        </Switch>
    </div>
  );
}
}


export default withRouter(App);