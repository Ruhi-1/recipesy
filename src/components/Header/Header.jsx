import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h4" color="inherit">
            Recipesy
          </TypoGraphy>
          <Nav />
        </Toolbar>
      </AppBar>
      
    </>
  );
};
export default Header;