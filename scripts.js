//getting root from index.html

const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
      container.setAttribute('class','container');

app.appendChild(logo);
app.appendChild(container);


// creating a request variable and assigning a new XMLHttpRequest object to it //

var xhttp = new XMLHttpRequest();

// opening an new connection, using the GET request on the URL endpoint

xhttp.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

xhttp.onload = function() {

// access JSON data 
// parsing response and create a data variable that contains
//all JSON as an array of JS objects
// forEach to console log out the title of each film
var data = JSON.parse(this.response);

    //data.forEach(movie => {
        //console.log(movie.title);
        if (xhttp.status >= 200 && xhttp.status < 400) {
          data.forEach(movie => {
            //   console.log(movie.title);
            //   console.log(movie.description);

            const card = document.createElement('div');
            card.setAttribute('class' , 'card');

            // setting the text of an html to data from API
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // creating paragraph for description
            const p = document.createElement('p');
            p.textContent = movie.description;

// append card to container element
            container.appendChild(card);

// h1 and p of card
            card.appendChild(h1);
            card.appendChild(p);

          });

        } else {

            console.log("Not Found");
  }
}

xhttp.send();