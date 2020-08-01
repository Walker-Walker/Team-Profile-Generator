
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is emp?",
        validate: input => {
          if(input === ""){ 
            console.log("Please enter a GitHub User Name")
            return false   
          } else {
            return true
          } 
          
      }


    },
]

type: "input",
name: "name",
message: "What is your Github User Name?",
validate: input => {
  if(input === ""){ 
    console.log("Please enter a GitHub User Name")
    return false   
  } else {
    return true
  } 
  
}


var inquirer = require('inquirer');
inquirer
  .prompt([
    
  ])
  .then(answers => {
   
  })
  .catch(error => {
    if(error.isTtyError) {
    
    } else {
      
    }
  });