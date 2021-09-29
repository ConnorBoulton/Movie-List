let message = document.querySelector('#message')


function addMovie(event){
  event.preventDefault()  
  let inputField = document.querySelector('input')
  let movie = document.createElement('li')
  let movieTitle = document.createElement('span')
 
  movieTitle.textContent = inputField.value  
    movieTitle.addEventListener('click', crossOffMovie)

  movie.appendChild(movieTitle)
  let deleteBtn = document.createElement('button')

  deleteBtn.textContent = 'X'
  deleteBtn.addEventListener('click', deleteMovie)
  movie.appendChild(deleteBtn)
  
  let list = document.querySelector('ul')
  list.appendChild(movie) 

  inputField.value = ' '
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = alert("Movie Deleted!")
}

let movieForm = document.querySelector('form')
movieForm.addEventListener('submit', addMovie)

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = alert("Movie Watched!")
    } else {
        alert("Movie added back to list.")
    }
}

