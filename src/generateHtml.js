function filterTeam(team) {
  team.filter((employee) => employee.getRole() === 'Manager');
  team.filter((employee) => employee.getRole() === 'Engineer');
  team.filter((employee) => employee.getRole() === 'Intern');
};

// const managerCard = team.map(manager,[0], => {
//   if (team === manager)
//     return managerCard;
//   console.log(managerCard);
// })

// team.map((team)=> {
//   return ''
// })

// var headerEl = document.createElement('h1')// Team 
// var containerEl = document.createElement('div')//container fluid 
// var cardEl = document.createElement('div');//card
// var cardTitleEl = document.createElement('h5');//card-title
// var listGroupEl = document.createElement('ul');//list-group list-group-flush
// var officeNumEl = document.createElement('li');//list-group-item-officeNumber (manager)
// var employeeEl = document.createElement('li');//list-group-item-email email(employee)
// var schoolEl = document.createElement('li');//list-group-item-intern school (intern)
// var gitHubEl = document.createElement('a');//card-link gitHub email(gitHub)
// var cardTextOne = document.createElement('p');//card-text  
// var cardTextTwo = document.createElement('p');//card-text

// containerEl.document.setAttribute('class', 'container-fluid background-color: darkorchid');
// cardEl.document.setAttribute('class', 'card');
// cardTitleEl.document.setAttribute('class', 'card-title');
// listGroupEl.document.setAttribute('class', 'list-group list-group-flush');
// officeNumEl.document.setAttribute('class', 'list-group-item');
// employeeEl.document.setAttribute('class', 'list-group-item');
// schoolEl.document.setAttribute('class', 'list-group-item');
// gitHubEl.document.setAttribute('class', 'card-link');
// cardTextOne.document.setAttribute('class', 'card-text');
// cardTextTwo.document.setAttribute('class', 'card-text');

// headerEl.textContent = "Team" + '${}';
// cardTitleEl.textContent = "" + '${}';
// listGroupEl.textContent = "" + '${}';
// officeNumEl.textContent = "" + '${}';
// employeeEl.textContent = "" + '${}';
// schoolEl.textContent = "" + '${}';
// gitHubEl.textContent = "" + '${}';
// cardTextOne.textContent = "" + '${}';
// cardTextTwo.textContent = "" + '${}';


// containerEl.appendChild(headerEl);

// {/* <div class="container-fluid" style="">
// <div class="card" style="width: 18rem">
//   <h5 class="card-title">Employee: ${userResponses.name}</h5>
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item">
//     Office Number: ${userResponses.officeNumber}
//   </li>
//   <li class="list-group-item">
//     School: ${userResponses.schoool}
//   </li>
// </ul>
// <div class="card-body">
//   <div class="card-text">Email:</div>

//   <a href="#" class="card-link"> ${userResponses.email}</a>
//   <p class="card-text">GitHub Email:</p>
//   <a href="#" class="card-link"> ${userResponses.ghEmail}</a>
// </div>
// </div> */}
// }

// module.exports = teamArray => {
//   return `
//     <!DOCTYPE html>
// <html lang="en">
//   <link
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
//     rel="stylesheet"
//     integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
//     crossorigin="anonymous"
//   />
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Employee Tracking</title>
//   </head>
//   <body>
//     <main>
//       <section style=" color: rgb(87, 86, 88) ; background-color: rgb(199, 183, 208)">
//         <h1>Team</h1>
//       </section>
//       <section>
//       <div class="container-fluid" style="background-color: darkorchid">
//       ${filterTeam(teamArray)}
        
//     </div>
//   </section>
//     </main>
//   </body>
// </html>

//     `
// }
