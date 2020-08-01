
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the the name of your Team Manager?",
        validate: input => {
          if(input === ""){ 
            console.log("Please enter name of Team Manager")
            return false   
          } else {
            return true
          }    
      }
    },
    {
        type: "input",
        name: "name",
        message: "What is Team Manager's Employee ID ?",
        validate: input => {
          if(input === ""){ 
            console.log("Please enter Employee ID of Team Manager")
            return false   
          } else {
            return true
          }    
      }
    },
    {
        type: "input",
        name: "name",
        message: "What is Team Manager's Email address?",
        validate: input => {
          if(input === ""){ 
            console.log("Please enter name Email Adress")
            return false   
          } else {
            return true
          }    
      }
    },
    {
        type: "input",
        name: "name",
        message: "What is Team Manager's Office Number?",
        validate: input => {
          if(input === ""){ 
            console.log("Please enter name of Team Manager")
            return false   
          } else {
            return true
          }    
      }
    },
//     {
//         type: "input",
//         name: "name",
//         message: "What is emp?",
//         validate: input => {
//           if(input === ""){ 
//             console.log("Please enter name of Team Manager")
//             return false   
//           } else {
//             return true
//           }    
//       }
//     },
//     {
//         type: "input",
//         name: "name",
//         message: "What is emp?",
//         validate: input => {
//           if(input === ""){ 
//             console.log("Please enter name of Team Manager")
//             return false   
//           } else {
//             return true
//           }    
//       }
//     },
//     {
//         type: "input",
//         name: "name",
//         message: "What is emp?",
//         validate: input => {
//           if(input === ""){ 
//             console.log("Please enter name of Team Manager")
//             return false   
//           } else {
//             return true
//           }    
//       }
//     },
//     {
//         type: "input",
//         name: "name",
//         message: "What is emp?",
//         validate: input => {
//           if(input === ""){ 
//             console.log("Please enter name of Team Manager")
//             return false   
//           } else {
//             return true
//           }    
//       }
//     },
//     {
//         type: "input",
//         name: "name",
//         message: "What is emp?",
//         validate: input => {
//           if(input === ""){ 
//             console.log("Please enter name of Team Manager")
//             return false   
//           } else {
//             return true
//           }    
//       }
//     },
// ]




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