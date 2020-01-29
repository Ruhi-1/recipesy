import React from 'react';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

function ViewListItem({ recipe }) {

    // handleSubmit = async e => {
    //     console.log(this.props)
    // e.preventDefault();
    // this.props.handleDeleteRecipe(this.state, this.props.user)
    // }

    // console.log('view list item page', recipe)
    return (
        <form>
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{recipe.nameOfRecipe}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Title:</dt>
                    <dt>{recipe.title}</dt>
                    <dt>Ingredients:</dt>
                    <dt>{recipe.ingredients}</dt>
                    <dt>descriptions:</dt>
                    <dt>{recipe.description}</dt>
                    <button>X</button>
                </dl>
            </div>
            <div className='panel-footer'>
                {/* <Link to='/viewpage'>Back to My View Page</Link> */}
            </div>
        </div>
        </form>
    );
    
}


export default ViewListItem;