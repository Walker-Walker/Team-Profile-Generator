
const generateTeamHTML = require("./utils/generateTeamHTML");
const fs = require("fs");
const path = require("path");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const DATA = {};
const teamArray = [];



function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the the name of your Team Manager?",
        validate: function (input) {
          if (input === "") {
            console.log("Please enter name of Team Manager");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is Team Manager's Employee ID ?",
        validate: function (input) {
          if (input === "") {
            console.log("Please enter Employee ID of Team Manager");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is Team Manager's Email address?",
        validate: function (input) {
          if (input.includes("@") && input) {
            return true;
          } else {
            console.log("\nplease enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is Team Manager's Office Number?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter office number of Team Manager");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((answers) => {
      //   pass in answers to create new constructor
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      DATA.manager = manager;
      teamChoices();
    })
    .catch((error) => console.error(error));
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the the name of your Team Intern?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name of Team Intern");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is Team Intern's Employee ID ?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter Employee ID of Team Intern");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is Team Intern's Email address?",
        validate: (input) => {
            if(input.includes("@") && input){ 
                return true
              } else {
                console.log('\nplease enter a valid email')
                return false
              }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is Team Intern's School?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name of Team Intern' School");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((answers) => {
      //pass in answers to create new constructor
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamArray.push(intern);
      teamChoices();
    })
    .catch((error) => console.error(error));
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the the name of your Team engineer?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name of Team engineer");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is Team engineer's Employee ID ?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter Employee ID of Team engineer");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is Team engineer's Email address?",
        validate: (input) => {
            if(input.includes("@") && input){ 
                return true
              } else {
                console.log('\nplease enter a valid email')
                return false
              }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is Team engineer's github profile?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name of Team Engineer's github profile");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((answers) => {
      //pass in answers to create new constructor
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamArray.push(engineer);
      teamChoices();
    })
    .catch((error) => console.error(error));
}

function teamChoices() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addTeamMemberOrStop",
        message: "Would you like to add another Team Member?",
        choices: ["Intern", "Engineer", "Finish Building Team"], //"Print Details"
      },
    ])
    .then((answers) => {
      switch (answers.addTeamMemberOrStop) {
        case "Intern":
          createIntern(); //same format as createManager
          break;
        case "Engineer":
          createEngineer(); //same format as createManager
          break;
        // case "Print Details":
        //   printArray();
        //   break;
        case "Finish Building Team":
          DATA.team = teamArray;  
          writeToFile("index.html", generateTeamHTML(DATA)); // stop inquirer...and handle array --> pass to string literals...require
          break;
      }
    });
}

function printArray() {
  console.log(teamArray);
}

function startProgram() {
  createManager();
}

startProgram();
