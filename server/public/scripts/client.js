console.log('script sourced.');


// create a function with Axios request
// will take time, eventually get back response
// .then
function getCalculations () {
     axios.get('/calculations').then((response) => {
       console.log(response);
       let calculationsFromServer = response.data;
       let resultDiv = document.querySelector('#resultDiv');
       resultDiv.innerHTML = calculationsFromServer[calculationsFromServer.length-1].result;
       let historyDiv = document.querySelector('#historyDiv');
       historyDiv.innerHTML ='';
       for(let calculation of calculationsFromServer) {
           historyDiv.innerHTML += `
              <p>${calculation.number1} ${calculation.operator} ${calculation.number2} = ${calculation.result}</p>
             ` 
    }
     }).catch((error) => { 
        console.log(error);
        alert('Something went wrong.');
     }) // ALWAYS ADD .catch
}

 getCalculations();








let operator
const number1 = document.getElementById("#number1").value;
const number2= document.getElementById("#number2").value;

let newCalculation = {
    number1: number1,
    number2: number2,
    operator: operator,

}

     //type    url     data to send
axios.post('/calculation', newCalculation).then((response) => {
       console.log(response);
    

}).catch((error) => {
  console.log(error);
  alert('Something went wrong.'); 
    })
