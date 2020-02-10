import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import Header from '../../components/Header/Header';
import TextField from '@material-ui/core/TextField';
// import AddButton from '../AddButton/AddButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';




// import '../Category/Category';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

//   const useStyles = makeStyles(theme => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//   }));

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[700],
      },
    },
  }))(Button);
class AddPage extends Component {
    state = {
        
        title: '',
        ingredients: '',
        description: ''
    
    };

   

    handleSubmit = async e => {
            console.log(this.props)
        e.preventDefault();
        this.props.handleAddRecipe(this.state, this.props.user)
        // try {
        //     await fetch("/api/recipes/addpage", {
        //         method: 'POST',
        //         headers: { 'content-Type': 'application/json'},
        //         body: JSON.stringify({
        //             recipe: this.state,
        //             userEmail: this.props.user.email,
        //             history: this.props.history.push('/viewpage')
                    
        //         })
        //     })
                // .then(response => {
                //     return response.json();
                // })
                // // .then(res => res.json());
                // .then(data => {
                //     this.props.recipes(data);
                //     console.log(data);
                // });
            // }  catch (err) {
            //     console.log(err);

            // }
        };
        isFormInvalid() {
            return !(this.state.title && this.state.ingredients && this.state.description);
        }


    handleChange =  e => {
        
        // console.log("*******")
        // console.log("*******  name " + e.target.name)
        // console.log("******* value " + e.target.value)
            // if([e.target.name] ==="ingredient"){
            //     this.setState(prevState => ({
            //         ingredients: [...prevState.ingredients, e.target.value]
            //     }));
            // } else {
            this.setState({
                [e.target.name]: e.target.value
            }
                // [e.target.name]: e.target.value
                )
            
        };
        
        // this.setState({
        //     if({[e.target.name]} == "ingredient"){
 
        //     }
        //     if ([e.target.name]==='ingredients') {
        //     [e.target.name]:[...this.state.[e.target.name], e.target.value]
        // } else {
        //     [e.target.name]: e.target.value
        // }
        


    render() {
        // const classes = useStyles();

    return (
        <div>
            <Header />
            <p align="center">Add Recipes</p>
        <form onSubmit={this.handleSubmit}>
        <div align="center" noValidate autoComplete="off">
        <input 
        type="text" 
        label="Title" 
        name="title" 
        placeholder="title"
        onChange={this.handleChange}
        />
            {/* <TextField id="standard-basic" label="Title" name="title" />  */}
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div align="center" autoComplete="off">
            <TextareaAutosize 
            id="standard-basic" 
            label="1. Ingredient" 
            name="ingredients" 
            placeholder="Ingredients" 
            onChange={this.handleChange}/>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div align="center">
            <TextareaAutosize
            rowsMax={30}
            aria-label="maximum height"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
/> 
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <AddButton /> */}
        <div align="center">
        <ColorButton 
        type="submit" 
        // className={classes.margin} 
        variant="contained" 
        color="primary"
        disabled={this.isFormInvalid()}
        >Add</ColorButton>
        </div>
        </form>
        </div>
        
        );
    }
};
export default AddPage;