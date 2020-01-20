import React from 'react';
// import RecipeCard from '../../components/RecipeCard/RecipeCard';
// import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header';
import TextField from '@material-ui/core/TextField';
import AddButton from '../AddButton/AddButton';
// import { makeStyles } from '@material-ui/core/styles';

// import '../Category/Category';

function AddPage(props) {
    return (
        <div className="component">
            <Header />
            <p align="center">Add Recipes</p>
        <div>
        {/* <div>
            <p>Title</p>
        </div> */}        
        <form  align="center" noValidate autoComplete="off">
            <TextField id="standard-basic" label="Title" />
        </form>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="1. Ingredient"/>
        </form>
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="2. Ingredient"/>
        </form>
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="3. Ingredient"/>
        </form>
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="4. Ingredient"/>
        </form>
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="5. Ingredient"/>
        </form>
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="6. Ingredient"/>
        </form>
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="7. Ingredient"/>
        </form>
        <form align="center" autoComplete="off">
            <TextField id="standard-basic" label="8. Ingredient"/>
        </form>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <form align="center">
        <TextField
            label="Instruction"
            id="filled-margin-none"
            // defaultValue="Description"
            variant="filled"
        />
        </form>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AddButton />
        {/* <form align="center">
        <Button to="/viewpage"type="submit" variant="contained" color="primary">Add</Button>
        </form> */}
        </div>
        </div>
        
        );
    }
    export default AddPage;