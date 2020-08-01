const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
var inquirer = require("inquirer");
const Manager = require("./lib/Manager");
var teamArray = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the the name of your Team Manager?",
        validate: (input) => {
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
        id: "id",
        message: "What is Team Manager's Employee ID ?",
        validate: (input) => {
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
        email: "email",
        message: "What is Team Manager's Email address?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name Email Adress");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        officeNumber: "officeNumber",
        message: "What is Team Manager's Office Number?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name of Team Manager");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((answers) => {
      //pass in answers to create new constructor
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamArray.push(manager);
      teamChoices();
    });
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
        id: "id",
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
        email: "email",
        message: "What is Team Intern's Email address?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name Email Adress");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        school: "school",
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
    });
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
        id: "id",
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
        email: "email",
        message: "What is Team engineer's Email address?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name Email Adress");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        github: "github",
        message: "What is Team engineer's github profile?",
        validate: (input) => {
          if (input === "") {
            console.log("Please enter name of Team engineer' github profile");
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
    });
}



function teamChoices() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addTeamMemberOrStop",
        message: "Would you like to add another Team Member?",
        choices: ["Intern", "Engineer", "Finish Building Team"],
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
        case "Finish Building Team":
          finishBuildingTeam(); // stop inquirer...and handle array --> pass to string literals...require
          break;
      }
    });
}
