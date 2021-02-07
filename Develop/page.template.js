const Employee = require("./lib/Employee");

// Create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class = "card employee-card" id="container">
            <div class = "card-header">
                <h2 class = "card-title">${manager.getName()}</h2>
                <h3 class = "card-title"><i class = "fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">ID: ${manager.getId()}</li>
                    <li class = "list-group-item">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEMail()}</a></li>
                    <li class = "list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    
                </ul>
            </div>
        </div>
    `;

    };

    const generateEngineer = team => {

        // create the engineer html
        const generateEngineer = engineer => {
            return `
            <div class = "card employee-card">
                <div class = "card-header">
                    <h2 class = "card-title">${engineer.getName()}</h2>
                    <h3 class = "card-title"><i class = "fas fa-glassess mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class = "card-body">
                    <ul class = "list-group">
                        <li class = "list-group-item">ID: ${engineer.getId()}</li>
                        <li class = "list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEMail()}</a></li>
                        <li class = "list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferre">${enginner.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    };
        };
    
        const generateIntern = team => {

            // create the intern html
            const generateIntern = Intern => {
                return `
                <div class = "card employee-card">
                    <div class = "card-header">
                        <h2 class = "card-title">${intern.getName()}</h2>
                        <h3 class = "card-title"><i class = "fas fa-glasses mr-2"></i>${intern.getRole()}</h3>
                    </div>
                    <div class = "card-body">
                        <ul class = "list-group">
                            <li class = "list-group-item">ID: ${intern.getId()}</li>
                            <li class = "list-group-item">Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEMail()}</a></li>
                            < <li class = "list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            `;
        };
            };

        const html= [];

        html.push(team.filter(employee=> employee.getRole()==="Manager").map(manager => generateManager(manager).join("")));
        html.push(team.filter(employee=> employee.getRole()==="Engineer").map(engineer => generateEngineer(engineer).join("")));
        html.push(team.filter(employee=> employee.getRole()==="Intern").map(intern => generateIntern(intern).join("")));
        
        return html.join("");
}
        module.exports = team =>{
            return`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My Team</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
                <link rel="stylesheet" href="../stylesheet.css">
                <script src="https://kit.fontawesome.com/71dcd7ccb8.js" crossorigin="anonymous"></script>
            </head>
            <body>
                <div class="container-fluid" id="container">
                 <div class="row'>
                    <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                    </div>
                </div>
            </div>
                

            </body>
            </html>
            `;
        };
            
                    
            
            

        

       