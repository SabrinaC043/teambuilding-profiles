//data set for game was words, but for me it is html?

module.exports = `${<html lang="en">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous" />
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Employee Tracking</title>
    </head>
    <body>
        <section style=" color: rgb(87, 86, 88) ; background-color: rgb(199, 183, 208)">
            <h1>Team</h1>
        </section>
        <section>
            <div class="container-fluid" style="background-color: darkorchid">
                <div class="card" style="width: 18rem">
                    <div
                        class="card-body"
                        style="background-color: rgb(170, 163, 211)">
                        <h5 class="card-title">Employee: ${names}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Office Number: ${officeNumber}
                        </li>
                        <li class="list-group-item">
                            School: ${school}
                        </li>
                    </ul>
                    <div class="card-body">
                        <div class="card-text">Email:</div>
                        <a href="#" class="card-link"> ${email}</a>
                        <p class="card-text">GitHub Email:</p>
                        <a href="#" class="card-link"> ${github}</a>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
    }`

