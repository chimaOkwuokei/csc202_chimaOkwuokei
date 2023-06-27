import logger, {promiseAwareTimeout ,CustomMath, appName, dummyFunction, genericFunction, genericFunction2, genericFunction3, staticMult, multiple, coordinates,Person} from './tools.js'
logger("Welcome! The application name is " + appName + ". There is a function that returns ," + dummyFunction())


///template literals
logger(`Welcome! The application name is ${appName}.
 There is a function that returns ${dummyFunction()}, and ${genericFunction()} and ${genericFunction2()} and ${genericFunction3()} and ${staticMult(2,3)} and ${coordinates(5,-1, 4,5,6)} `)

 try{
    logger(multiple(2,45,6,67,86,54321,2122223,545456565,656)); 
   }catch(error){
    logger(error.message); 
  
   }



   let person1 = new Person("Pius", "Onobhayedo", "Male",1.7);
   let person2 = new Person("Mary", "Joseph", "Female", undefined);
   
   person1.firstName = "peter"; //here we have deliberately used lowercase for first letter
   person2.firstName = "maria"; //here we have deliberately used lowercase for first letter
   logger(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.

   logger(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);   

   logger(CustomMath.sqrt(10)); 



   
   //Asynchronous programming
   new Promise((resolve, reject) => {
      setTimeout(()=>{    //settimeout is the async function call
         reject("Timeout is over"); //resolve is within the callback function //send out a success feedback with data using resolve
      }, 3000)          //set timeout for Xms i.e. 1second.
      })

      .then((data) => {
          logger(`The positive feedback is ${data}`);//This should output "Timeout is over",when the callback is resolve
      })

      .catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
          logger(`The negative feedback is ${error}`);
      });
    /*
    new Promise is the "wrapper". it wraps the async function "setTimeout". the data in the setTineout func is the callback function.
    */ 





     //Let us still maintain the last logger statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
     let user1 = new Person("Tomz","mypassword","Pius","Onobhayedo","Male",undefined);
     logger(`The username of ${user1.firstName} is ${user1.lastName}`) 

     setTimeout(()=>{
         logger("Timeout is over again"); //send out a success feedback with data using resolve
      }, 1000) 



     // logger(promiseAwareTimeout(3000).then())


   let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
  fetch(url)
 .then(response => response.json()) //convert data returned to json
 .then(data => logger(`Data: Id = ${data.id}, 
Name = ${data.name},
Email = ${data.email},
Lat = ${data.address.geo.lat},
Long = ${data.address.geo.lng}`)) //use the json data
 .catch(error => logger(`Error: ${error}`));



 ///fetch is being declared, because of let
 let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
 let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
 let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
 Promise.all([fetch1,fetch2,fetch3])//get the data (all invoked) for the three calls in an array.
 .then((data)=>{
  logger(`User1 = ${data[0].email}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
 }) 
 



//try/catch
//define a function that uses our Promise executor
//it is a way to call functions that return promises. this approach is more in line
//with other exception handling
const usePromiseAwareTimeout = async (milliseconds) => {

   logger('About to call timeout')

   try{
      //await specifies that it is  an asynchronous func
      //await is more like, "hey!, wait for the feedback first."
      const data = await promiseAwareTimeout(milliseconds);
      logger(data)
   }
   
   catch{
      logger("errorrrrrrrrrrrrrr");
   }
};
//call the async function.
usePromiseAwareTimeout(3000); 


//classwork
//call fetch('https://jsonplaceholder.typicode.com/users/1') using the async/await func

const web_address = 'https://jsonplaceholder.typicode.com/users/'; //the url has been assigned
//to the variable web_address 


const getUserById = async (userId) => { //user id parameter is expected
   let url = web_address + userId; //get the specific url for the user to fetch
   const response = await fetch(url); //make a call to the asynchronous fetch()
   const data = await response.json(); //make a call to the asynchronous conversion to json.
   logger(data.name); //log the feedback.
  }


  getUserById(2); //This should display 'Ervin Howell' on the browser. 