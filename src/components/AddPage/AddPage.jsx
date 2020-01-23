import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import Header from '../../components/Header/Header';
import TextField from '@material-ui/core/TextField';
// import AddButton from '../AddButton/AddButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// import '../Category/Category';

class AddPage extends Component {
    state = {
        
        title: '',
        ingredients: [],
        description: ''
        
    };

    

    handleSubmit = async e => {

        e.preventDefault();
        try {
            await fetch("/addpage", {
                method: 'POST',
                headers: { 'content-Type': 'application/json'},
                body: JSON.stringify({
                    recipe: this.state,
                    userEmail: this.props.user.email
                })
            })
                .then(response => {
                    return response.json();
                })
                // .then(res => res.json());
                .then(data => {
                    this.props.recipes(data);
                    console.log(data);
                });
            }  catch (err) {
                console.log(err);

            }
        };
        isFormInvalid() {
            return !(this.state.title && this.state.ingredients && this.state.description);
        }


    handleChange =  e => {
        // console.log("*******")
        console.log("*******  name " + e.target.name)
        console.log("******* value " + e.target.value)
            this.setState({
            [e.target.name]: e.target.value
        });
        };
        
        // this.setState({
        // if ([e.target.name]==='ingredients') {
        //     [e.target.name]:[...this.state.[e.target.name], e.target.value]
        // } else {
        //     [e.target.name]: e.target.value
        // }
        // });
     //}

    render() {
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
        <button 
        type="submit" 
        className="btn btn-default" 
        variant="contained" 
        color="primary"
        disabled={this.isFormInvalid()}
        >Add</button>
        </div>
        </form>
        </div>
        
        );
    }
};
    export default AddPage;