// function generateHTML(employee) {
//   if (employee.getRole() === 'Manager') {
//     return `
//   <div class="container-fluid" style="">
//   <div class="card" style="width: 18rem">
//   <h5 class="card-title">Employee: ${employee.name}</h5>
//  </div>
//  <ul class="list-group list-group-flush">

//    <li class="list-group-item">
//      ID: ${employee.id}
//    </li>
//  </ul>
//  <div class="card-body">
//    <div class="card-text">Email:</div>
//    <p class="card-text"> Email:</p>
//    <a href="#" class="card-link"> ${employee.email}</a>
   
//    <p class="card-text"> Email: ${employee.officeNumber}</p>
//  </div>
// </div>
// `}
//   if (employee.getRole() === 'Engineer') {
//     return `<p class="card-text">GitHub Email:</p>
//   <a href="#" class="card-link"> ${employee.gitHub}</a>`
//   }
//   if (employee.getRole() === 'Intern') {
//     return `<p class="card-text">School:</p>
//   <a href="#" class="card-link"> ${employee.school}</a>`
//   }

//   module.exports = teamArray => {
//     var cards = teamArray.map((employee) => {
//       generateHTML(employee)
//       var cardEnd = "",
//       for (const card of cards) {
//         cardEnd += `\n` + card

//         return `
//   <!DOCTYPE html>
// html lang="en">
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
//       <section style=" color: rgb(228, 224, 232) ; background-color: rgb(145, 126, 157)">
//         <h1>Team</h1>
//       </section>
//       <section>
//       <div class="container-fluid" style="background-color: darkorchid">
//       ${cardEnd}
//         </div>
//  </section>
//    </main>
// </body>
// </html>`})
//   }
// }
// 

// 
function filterTeam(team) {
  team.filter((employee) => employee.getRole() === 'Manager');
  team.filter((employee) => employee.getRole() === 'Engineer');
  team.filter((employee) => employee.getRole() === 'Intern');
};

// filter through team and return cards 

var card= filterTeam.reduce(function(team, employee))