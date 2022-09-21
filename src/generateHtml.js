function filterTeam(team) {

    team.filter((employee) => employee.getRole() === 'Manager');
    return teamArray();


    team.filter((employee) => employee.getRole() === 'Engineer')


    team.filter((employee) => employee.getRole() === 'Intern')


    // filter throught the team and pullout the manager, the engineer, the intern, an return them in their own cards


    // <div class="card" style="width: 18rem">
    //           <div
    //             class="card-body"
    //             style="background-color: rgb(170, 163, 211)"
    //           >
    //             <h5 class="card-title">Employee: ${userResponses.name}</h5>
    //           </div>
    //           <ul class="list-group list-group-flush">
    //             <li class="list-group-item">
    //               Office Number: ${userResponses.officeNumber}
    //             </li>
    //             <li class="list-group-item">
    //               School: ${userResponses.schoool}
    //             </li>
    //           </ul>
    //           <div class="card-body">
    //             <div class="card-text">Email:</div>
    //             <a href="#" class="card-link"> ${userResponses.email}</a>
    //             <p class="card-text">GitHub Email:</p>
    //             <a href="#" class="card-link"> ${userResponses.ghEmail}</a>
    //           </div>
    //         </div>
}

module.exports = teamArray => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
    crossorigin="anonymous"
  />
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Employee Tracking</title>
  </head>
  <body>
    <main>
      <section style=" color: rgb(87, 86, 88) ; background-color: rgb(199, 183, 208)">
        <h1>Team</h1>
      </section>
      <section>
      <div class="container-fluid" style="background-color: darkorchid">
      ${filterTeam(teamArray)}
        
    </div>
  </section>
    </main>
  </body>
</html>

    `
}
