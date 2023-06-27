//classical javasript defines a function by usin g the keyword 'function
/*var logger = function logger(output){
    console.log(output);
}
//logger("my name is chima")


export var appName = "ES6 Review";

export var dummyFunction = function(){
    return "I am a dummy function";
}
///es6 allow us to export declarations
export default logger*/

//let's rewrite our logger function in a way that is more es6 compliant
const logger = (output) => {
    console.log(output);
}

///es6 allow us to export declarations
export default logger
export const appName = "ES6 Review";

export const dummyFunction = () => {
    let feedback = "I am a dummy"
    feedback = "I am no longer a dummy"
    return feedback;
}

export const genericFunction = () => {
    const languages = ['Python', 'JavaScript','Java', 'C#','C++'];
    const [firstLang, secondLang] = languages;
    return `First language is ${firstLang} and the second is ${secondLang}`
}

export const genericFunction2 = () => {
    const languages = ['Python', 'JavaScript','Java', 'C#','C++'];
    const [firstLang, secondLang, ...otherLangs] = languages;
    return `First language is ${firstLang} and the second is ${secondLang} and the rest are ${otherLangs}`
}

export const genericFunction3 = () => {
    let personalInformation = {
        firstName: 'Chima',
        lastName: 'Okwuokei',
        gender: 'Male',
        religion: 'Christianity (Catholic)',
        fathersName: 'fidel',
        mothersName : 'Ezy'
    }

    //deconstruct into new variables firstName, last name and otherPersonalInfo
    let {firstName, lastName, ...otherPersonalInfo} = personalInformation;

    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
} 


export const staticMult = (a, b=1) => {
    //This function multiplies any two numbers
    //if only one argument is sent as argument when function is called, b will default to 1.
    return (a * b); 
}

export const multiple = (...numbers) => {
    var product = 1;
    if (numbers.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works
    //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of
    for(let number of numbers){
    product = product * number;
    }
    return product;
   } 

export const coordinates = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed.
    //Map the array of x into an array of {x,y} object, with the y value calculated each time.
    let coordinates = x.map((x) => { //map((x) x here is different, it's arbritrary
    return {'x': x, 'y' : (m*x) + c};
    })
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates){
    let xy = `(${coordinate.x},${coordinate.y})`
    output+=xy;
    }
    //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario)
    //coordinates.forEach((coordinate)=>{
    // let xy = `(${coordinate.x},${coordinate.y})`;
    // output+=xy;
    //})
    return output;
   } 




   //class declaration
   export const Person = class {

    constructor(firstName, lastName, gender, height){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.height = height;
    }

    getFirstName(){
        return toTitleCase(this.firstName)
    } 

   }

   export const toTitleCase = (str) => {
    str.toLowerCase();//first set the whole string to lowercase in case
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase
   }





   //static methods
   export class CustomMath{
       static sqrt(a){
       return Math.sqrt(a);
   
      }
       static pow(a,b){
       return Math.pow(a,b);
      }
   }

   //inheritance
   export class User extends Person{     //user is the sub class that is inheriting from the usual class 'user'
    constructor(username, password, firstName, lastName, gender, height){
        super(firstName, lastName, gender, height);
        this.username = username;
        this.password = password;
    }
   } 


   //exportation of the created function
   export const promiseAwareTimeout = (milliseconds) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
    }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
   } 