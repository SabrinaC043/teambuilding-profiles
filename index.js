// Include Packages for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([{

    type: 'input',
    name: 'names',
    message: 'What is your Employees name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
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

  ])
  .then((response) => {
    console.log('response')
  })
};


// function to write index.html file 
try {
  fs.writeFileSync('index.html', data, {
    flag: 'a'
  })
} catch (e) {
  console.log("Error:", e)
}
