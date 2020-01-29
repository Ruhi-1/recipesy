import tokenService from '../utils/tokenService';
const BASE_URL = '/api/recipes';


// export function getAll() {
//     return fetch('/api/recipes', {
//     headers: {'content-Type': 'application/json'}
//     .then(response => {
//         return response.json();
//     })
//     // .then(res => res.json())

    
// })
// }

// e.preventDefault();
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

export function create(recipe, user) {
    console.log('recipes api *****',user)
    return fetch(`${BASE_URL}/addpage`, {

        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
            },        
            body: JSON.stringify({
            recipe: recipe,
            // userEmail: user.email,
            // history: this.props.history.push('/viewpage')
            
        })
    }).then(res => res.json());
    
}


export function getAll() {
    return fetch(BASE_URL).then(res => res.json())
}


// export function getAll() {
    // return fetch(BASE_URL)
        // , {
        // headers: {
        //     'Authorization': 'Bearer ' + tokenService.getToken()
        //   }        
          // body: JSON.stringify({
        // recipe: this.state,
            // user: this.state.user
        // })
    // })
    // .then(res =>  res.json());
// }
// .then(data => {
//     this.props.recipes(data);
//     console.log(data);
// });


export function update(recipe) {
    return fetch(`${BASE_URL}/${recipe._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
            },        body: JSON.stringify(recipe)
    }).then(res => res.json());
}

//delete
export function deleteRecipe(id) {
    return fetch(`${BASE_URL}/viewpage/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}