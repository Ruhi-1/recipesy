import React from 'react';
import { Link } from 'react-router-dom';
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import TypoGraphy from "@material-ui/core/Typography";


const Nav = (props) => {
let nav = props.user ?
    <div>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span >WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup'>SIGN UP</Link>
    </div>;
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

// function Nav(props) {
//     return (
    //   <List component="nav">
    //     <ListItem component="div">
    //       <ListItemText inset>
    //         <TypoGraphy color="inherit" variant="subtitle1">
    //          <Link  to='/home' className='NavBar-link'>Home </Link>
    //         </TypoGraphy>
    //       </ListItemText>
    //     <ListItemText inset>
    //       <TypoGraphy color="inherit" variant="subtitle1">
    //         Add Recipe
    //       </TypoGraphy>
    //     </ListItemText>
    //     <ListItemText inset>
    //       <TypoGraphy color="inherit" variant="subtitle1">
    //         View Recipe
    //       </TypoGraphy>
    //     </ListItemText>
    //     <ListItemText inset>
    //       <TypoGraphy color="inherit" variant="subtitle1">
    //        <Link to='' onClick={props.handleLogout}> LogOut </Link>
    //        {/* &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; */}
    //       {/* <span className='NavBar-welcome'>WELCOME, {props.user.name}</span> */}
    //       </TypoGraphy>
    //     </ListItemText>
    //     <ListItemText inset>
    //       <TypoGraphy color="inherit" variant="subtitle1">
    //        <Link to='/login'> LogIn </Link>
    //       </TypoGraphy>
    //     </ListItemText>
    //     <ListItemText inset>
    //       <TypoGraphy color="inherit" variant="subtitle1">
    //        <Link to='/signup'> SignUp </Link>
    //       </TypoGraphy>
    //     </ListItemText>
    //   </ListItem>
    // </List>
//   );
// }

  
  export default Nav;