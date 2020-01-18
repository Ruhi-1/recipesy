import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { Container } from '@material-ui/core';
// import Category from './components/Category/Category';
import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import ViewPage from '../ViewPage/ViewPage';
// import userService from '../../utils/userService';
import Recipe from '../../components/Recipe/Recipe';
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      recipe: Recipe,
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
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
        {/* <Header /> */}
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
       <div>
         {/* <Category /> */}
         <ViewPage />
         
       </div>
       </Switch>
    </div>
  );
}
}


export default App;