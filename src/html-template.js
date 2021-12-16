const employeeEngineer = require('../lib/Engineer');
const employeeManager = require('../lib/Manager');
const employeeIntern = require('../lib/Intern');

function htmlPage(employees) {
    const {manager, engineer, intern} = employees;
   
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./style.css">
      <title>My Team Page</title>
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main class="container">
          <section class="row">
            ${managerSection(manager)}
            ${engineerSection(engineer)}
            ${internSection(intern)}
          </section>
        </main>
      </body>
      </html>
    `;
  };

function managerSection(manager) {
  const managerArr = new employeeManager(manager.name, manager.id, manager.email, manager.officeNumber);

  return `
    <div class="col-sm-4">
      <div class="card">
        <h4>${managerArr.getName()}<br/>
          ${managerArr.getRole()} 
        </h4>
        <div class="card-body">
          <p>ID: ${managerArr.getId()}</p>
          <p>Email: ${managerArr.getEmail()}</p>
          <p>Office Number: ${managerArr.getOfficeNumber()}</p>
        </div>
      </div>
    </div>
  `;
};

function engineerSection(engineer) {
  let engineers = "";
  let engineerArr = [];
  for (let i = 0; i < engineer.length; i ++) {
    engineerArr[i] = new employeeEngineer(engineer[i].name, engineer[i].id, engineer[i].email, engineer[i].github)
    engineers = engineers + 
    `
    <div class="col-sm-4">
      <div class="card">
        <h4>${engineerArr[i].getName()}<br/>
          ${engineerArr[i].getRole()}
        </h4>
        <div class="card-body">
          <p>ID: ${engineerArr[i].getId()}</p>
          <p>Emal: ${engineerArr[i].getEmail()}</p>
          <p>GitHub: ${engineerArr[i].getGithub()}</p>
        </div>
      </div>
    </div>
    `;
  }
  return engineers;
};

function internSection(intern) {
  let interns = "";
  let internArr = [];
  for (let i = 0; i < intern.length; i ++) {
    internArr[i] = new employeeIntern(intern[i].name, intern[i].id, intern[i].email, intern[i].school)
    interns = interns + 
    `
    <div class="col-sm-4">
      <div class="card">
        <h4>${internArr[i].getName()}<br/>
          ${internArr[i].getRole()}
        </h4>
        <div class="card-body">
          <p>ID: ${internArr[i].getId()}</p>
          <p>Emal: ${internArr[i].getEmail()}</p>
          <p>School: ${internArr[i].getSchool()}</p>
        </div>
      </div>
    </div>
    `;
  }
  return interns;
};



module.exports = htmlPage;
