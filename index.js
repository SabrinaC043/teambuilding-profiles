// Include Packages for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([{

    type: 'input',
    name: 'names',
    message: 'What is the Employees name?',
    // default: "enter full name",
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    // default: "Please enter a valid email address",
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your employee id number?',
    default: "Please enter a valid employee id number",
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
    default: "Please enter a valid office number",
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github email?',
    default: "Please enter a valid github email",
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the name of your school?',
    // default: "Please enter a school name",
  },


  ]);

// function to write index.html file 

fs.writeFile('index.html', data, (err) => {
  console.log("Error:", err)
})
fs.appendFile('index.html', data, {
  encoding: 'utf8'
}, (err) => {
  console.log("Error:", err)
})


// create a function to kick off 
// function create() {

//   inquirer.prompt(questions).then((data) => {
//     writetoFile('index.html', generateHTMLFile(data))
//   }).catch((error) => {
//     console.log(error);
//   });
// }

// function generateHTMLFile() {
// };

// create()