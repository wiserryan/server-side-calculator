// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5001;

app.use(express.json());

let calculations = [
    { 
      number1: 2, 
      number2: 4,
      operator: '+',
      result: 6,  
    },
    { 
        number1: 3, 
        number2: 7,
        operator: '*',
        result: 21,  
      }
];


//  GET request returns info
//  function takes on two things, first parameter is what to match 
 
app.get('/calculations', (req, res) => {
    console.log('GET request made for /calculations');
   res.send(calculations);
   });
 
 
//   PUT request update info
//   DELETE request to remove info
 
//   POST request save user input
//  app.post('/jokes', (req, res) => {
//    console.log('POST request made for /jokes');
//    any data we send from client/server is 
//    available as a property of req.body
//    console.log(req.body);
//    let jokesForServer = req.body;
//    jokes.push(jokesForServer);
//    res.send(201); //Great success!
//  });
 




// Look here for files
app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});