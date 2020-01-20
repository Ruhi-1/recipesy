import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
// import Nav from "../Nav/Nav";
import { Link } from 'react-router-dom';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Header = (props) => {
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h4" color="inherit">
            Recipesy
          </TypoGraphy>
        <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <TypoGraphy color="inherit" variant="subtitle1">
              <Link  to='/homepage' className='NavBar-link'>Home </Link>
              </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
            <TypoGraphy color="inherit" variant="subtitle1">
              <Link to='/addpage' className='NavBar-link'>Add Recipe</Link>
            </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
            <TypoGraphy color="inherit" variant="subtitle1">
              <Link to="/viewpage" className="NavBar-link">View Recipe</Link>
            </TypoGraphy>
          </ListItemText>
          <ListItemText inset>
            <TypoGraphy color="inherit" variant="subtitle1">
              <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
            </TypoGraphy>
          </ListItemText>
        </ListItem>
      </List>
        {/* <Nav /> */}
        </Toolbar>
        </AppBar>
      
    </>
  );
};
export default Header;