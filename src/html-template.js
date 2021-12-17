const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

function htmlPage(manager, engineer, intern) {
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
  const managerArr = new Manager(manager[0].name, manager[0].id, manager[0].email, manager[0].officeNumber);
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
  for (let i = 0; i < engineer.length; i ++) {
    const engineerArr = new Engineer(engineer[i].name, engineer[i].id, engineer[i].email, engineer[i].github)
    engineers = engineers + 
    `
    <div class="col-sm-4">
      <div class="card">
        <h4>${engineerArr.getName()}<br/>
          ${engineerArr.getRole()}
        </h4>
        <div class="card-body">
          <p>ID: ${engineerArr.getId()}</p>
          <p>Emal: ${engineerArr.getEmail()}</p>
          <p>GitHub: ${engineerArr.getGithub()}</p>
        </div>
      </div>
    </div>
    `;
  }
  return engineers;
};

function internSection(intern) {
  let interns = "";
  for (let i = 0; i < intern.length; i ++) {
    const internArr = new Intern(intern[i].name, intern[i].id, intern[i].email, intern[i].school)
    interns = interns + 
    `
    <div class="col-sm-4">
      <div class="card">
        <h4>${internArr.getName()}<br/>
          ${internArr.getRole()}
        </h4>
        <div class="card-body">
          <p>ID: ${internArr.getId()}</p>
          <p>Emal: ${internArr.getEmail()}</p>
          <p>School: ${internArr.getSchool()}</p>
        </div>
      </div>
    </div>
    `;
  }
  return interns;
};



module.exports = htmlPage;
