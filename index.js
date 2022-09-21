// Include Packages for this application
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = require('./src/generateHtml');
const teamMembers = []

//GIVEN a command-line application that accepts user input
//WHEN I am prompted for my team members and their information
function init() {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the Manager's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Manager's email address?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Manager's id number?",

  },

  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the Manager's office number?",
  },
  ]).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamMembers.push(manager)
    menu()
  })

}

function menu() {
  inquirer.prompt([{
    type: 'list',
    name: 'menu',
    message: "Which employee do you want to add?",
    choices: ['Engineer', 'Intern', 'Done'],
    // if we don't have third option there is no exit-point- third option is step out and create Manager 
    // there is always an option-C 


  }]).then((answers) => {
    console.log(answers.menu)
    switch (answers.menu) {
      case "Engineer":
        engineerQuestions()
        break;
      case "Intern":
        internQuestions()
        break;
      default:
        buildTeam()
        break;
    }
  })

}

function engineerQuestions() {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the Engineer's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Engineer's email address?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Engineer's id number?",

  },

  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's github username?",
  },
  ]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamMembers.push(engineer)
    menu()
  })
}

function internQuestions() {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the Intern's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Intern's email address?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Intern's id number?",

  },

  {
    type: 'input',
    name: 'school',
    message: "What is the Intern's school?",
  },
  ]).then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamMembers.push(intern)
    menu()
  })
}


//create a function for HTML creation but put in the promise here b/c that is how we are pausing for responses
function buildTeam() {
  fs.writeFileSync('./dist/index.html', generateHTML(teamMembers)) // just put all of the classes into the team Members array, why? to push different question on 
  // command line based off of Employee position. Answers have been converted to classes to generate Html
}

init()







