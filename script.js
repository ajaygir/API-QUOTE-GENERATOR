'use strict'

//VARIABLES
let quotetext = document.querySelector('.quotetext')
let button = document.querySelector('.button')
let author = document.querySelector('.author')


let api = 'https://api.quotable.io/random'




//FUNCTION TO CREATE NEW QUOTE
/*
const createnewquote = function(){

    fetch (api).then(function(res){
        return res.json();
    })
    .then (function(data){
      
        quotetext.innerHTML = data.content
        author.innerHTML = data.author
    })
    .catch(function(err){
        quotetext.innerHTML = 'Error fetching quote'
    })
   
}
*/

//ASYNC AWAIT METHOD

const createnewquote = async function(){
    const response = await fetch(api);
    const data = await response.json();

    quotetext.innerHTML = data.content
    author.innerHTML = data.author

}



//EVENT LISTENER
button.addEventListener('click', createnewquote)
