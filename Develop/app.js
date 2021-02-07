const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const template= require("./page.template");



// Write code to use inquirer to gather information about the development team members,
const teamMembers = [];
const idArray =[];

function appMenu(){

    function createManager() { 
        console.log("Please build your team");
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message:"What is the team manager's name?",
                // validate: answer => {
                //     if (answer == "") {
                //      return true;
                //  }
                //  return "Please enter at least one character.";
                // }   
            },
            {
                type: "input",
                name: "managerId",
                message:"What is the team manager's id?", 
                // validate: answer => {
                //     const pass = answer.match(
                //         /^[1-9]\d*s/
                //  );
                //  if (pass) {
                //      return true;
                //  }
                //  return "Please enter a positive nubmer greater than zero.";
                // }   
            },
            {
                type: "input",
                name: "managerEmail",
                message:"What is the team manager's email", 
                // validate: answer => {
                //     const pass = answer.match(
                //         /\$+@\$+|.\$+/
                //  );
                //  if (pass) {
                //      return true;
                //  }
                //  return "Please enter a valid email address.";
                // } 
              
                 
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message:"What is the team manager's office number", 
                // validate: answer => {
                //     const pass = answer.match(
                //         /^[1-9]\d*s/
                //  );
                //  if (pass) {
                //      return true;
                //  }
                //  return "Please enter a positive nubmer greater than zero.";
                // } 
            },
        ]).then(answers => {
            const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            
            creatTeam();
        });

    }
        function creatTeam() {
        inquirer.prompt ([
    {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",  
        choices: ['Engineer','Intern', 'I dont want to add any more team members']  
    },


   ]).then(userChoice =>{
       switch(userChoice.memberChoice){
           case "Engineer":
            addEngineer();
            break;
            case "Intern":
            addIntern();
            break;
            default:
            buildTeam();


            
           
       }
   })
        }

        function addEngineer() { 
            inquirer.prompt ([
                {
                    type: "input",
                    name: "engineerName",
                    message:"What is your engineer's name?",
                    // validate: answer => {
                    //     if (answer !== "") {
                    //      return true;
                    //  }
                    //  return "Please enter at least one character.";
                    // }   
                },
                {
                    type: "input",
                    name: "engineerId",
                    message:"What is your engineer's id?", 
                    // validate: answer => {
                    //     const pass = answer.match(
                    //         /^[1-9]\d*s/
                    //  );
                    //  if (pass) {
                    //      return true;
                    //  }
                    //  return "Please enter a positive nubmer greater than zero.";
                    // }   
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message:"What is your engineer's email", 
                    // validate: answer => {
                    //     const pass = answer.match(
                    //         /\$+@\$+|.\$+/
                    //  );
                    //  if (pass) {
                    //      return true;
                    //  }
                    //  return "Please enter a valid email address.";
                    // } 
                  
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message:"What is your enginner's GitHub username?", 
                    // validate: answer => {
                    //     if (answer !== "") {
                    //      return true;
                    //  }
                    //  return "Please enter at least one character.";
                    // }   
                },
            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamMembers.push(engineer);
                idArray.push(answers.engineerId);
                
                creatTeam();
            });
        }
         

        function addIntern() { 
            inquirer.prompt ([
                {
                    type: "input",
                    name: "internName",
                    message:"What is your intern's name?",
                //     validate: answer => {
                //         if (answer !== "") {
                //          return true;
                //      }
                //      return "Please enter at least one character.";
                //     }   
                },
                {
                    type: "input",
                    name: "internId",
                    message:"What is your intern's id?", 
                    // validate: answer => {
                    //     const pass = answer.match(
                    //         /^[1-9]\d*s/
                    //  );
                    //  if (pass) {
                    //      return true;
                    //  }
                    //  return "Please enter a positive nubmer greater than zero.";
                    // }   
                },
                {
                    type: "input",
                    name: "internEmail",
                    message:"What is your intern's email", 
                    // validate: answer => {
                    //     const pass = answer.match(
                    //         /\$+@\$+|.\$+/
                    //  );
                    //  if (pass) {
                    //      return true;
                    //  }
                    //  return "Please enter a valid email address.";
                    // } 
                  
                },
                {
                    type: "input",
                    name: "internSchool",
                    message:"What is your intern's school?", 
                    // validate: answer => {
                    //     if (answer !== "") {
                    //      return true;
                    //  }
                    //  return "Please enter at least one character.";
                    // }   
                },
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamMembers.push(intern);
                idArray.push(answers.internId);
                
                creatTeam();
            });

        }

        function buildTeam() {
            if (!fs.existsSync(OUTPUT_DIR)) {
               fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(teamMembers),
            "utf-8");
                }
                createManager();
                }
            appMenu();
















