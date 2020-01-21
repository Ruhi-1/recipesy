import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import { Container } from '@material-ui/core';
import Nav from '../../components/Nav/Nav';
// import Header from '../../components/Header/Header';
import ViewPage from '../../components/ViewPage/ViewPage';
import AddPage from '../../components/AddPage/AddPage';
import userService from '../../utils/userService';
import Recipe from '../../components/RecipePage/RecipePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import HomePage from '../../components/HomePage/HomePage';
import AddButton from '../../components/AddButton/AddButton';


class App extends Component {
  constructor() {
    super();
    this.state = {
      recipe: [],
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
      <Route path={"/viewpage"} component={ViewPage} />
      <Route path={"/addpage"} component={AddPage} />
      <Route path={"/homepage"} component={HomePage} />
      <Route path={"/viewpage"} component={AddButton} />
        <div>
          {/* <ViewPage /> */}
        </div>
        </Switch>
    </div>
  );
}
}


export default App;