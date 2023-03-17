// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5001;

app.use(express.json());
// Look here for files
app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

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
 app.post('/calculation', (req, res) => {
   console.log('POST request made for /calculation');
   let calculation = (req.body)
   calculation.result = getResult(req.body);
   calculations.push(calculation)
   res.sendStatus(201); //Great success!
 });
 
function getResult(taco) {
  console.log(taco);
//figure out how to get the actual result - put on line 63

let result = 0;
 if (taco.operator === '-') {
    result = taco.number1 - taco.number2
 }  else if (taco.operator === '+') {
    result = taco.number1 + taco.number2
 }  else if (taco.operator === '/') {
    result = taco.number1 / taco.number2
 }  else if (taco.operator === '*') {
    result = taco.number1 * taco.number2
 }
    return result;


}



