const htmlTemplate = require('./src/html-template');
const generateHtml = require('./src/generate-html');

const inquirer = require('inquirer');
let manager = [];
let engineer = [];
let intern = [];

function engineerInfo() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Engineers's name? (Required) ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("\nPlease enter Engineers's name! ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Engineer's ID Number? (Required) ",
      validate: idInput => {
        idInput = parseInt(idInput);
        if (isNaN(idInput)) {
          console.log("\nPlease enter Engineer's numeric ID Number! ");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Engineers's email? (Required) ",
      validate: emailInput => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
          return true;
        } else {
          console.log("\nPlease enter a valid email address format! ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the Engineer's github user? (Required) ",
      validate: githubInput => {
        if (!githubInput) {
          console.log("\nPlease enter Engineer's github user! ");
          return false;
        } else {
          return true;
        }
      }
   }
  ])
  .then(answers => {
    engineer.push(answers);
    addEmployee();
  });
}

function internInfo() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Intern's name? (Required) ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("\nPlease enter Intern's name! ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Intern's ID Number? (Required) ",
      validate: idInput => {
        idInput = parseInt(idInput);
        if (isNaN(idInput)) {
          console.log("\nPlease enter Intern's numeric ID Number! ");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Intern's email? (Required) ",
      validate: emailInput => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
          return true;
        } else {
          console.log("\nPlease enter a valid email address format! ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the Intern's school? (Required) ",
      validate: schoolInput => {
        if (!schoolInput) {
          console.log("\nPlease enter Intern's school name! ");
          return false;
        } else {
          return true;
        }
      }
   }
  ])
  .then(answers => {
    intern.push(answers);
    addEmployee();
  });
}

function addEmployee() {
  inquirer.prompt([ 
  {
    type: 'list',
    name: 'role',
    choices: ['Add Engineer', 'Add Intern', "Done adding team members, create my team's web page!"],
    default: 'Add Engineer',
  }
  ])
  .then(answers => {
    answers = JSON.stringify(answers);
    if (answers.includes("Engineer")) {
      engineerInfo();
    } else if (answers.includes("Intern")) {
      internInfo();
    } else {
      const htmlPage = htmlTemplate(manager, engineer, intern);
      generateHtml(htmlPage)
        .then(result => {
          if(result.ok) {
            console.log(result.message);
          } 
        });
    }
  })
  .catch(err => {
    console.log(err);
  });
};

function managerInfo() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Manager's name? (Required) ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("\nPlease enter Manager's name! ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Manger's ID Number? (Required) ",
      validate: idInput => {
        idInput = parseInt(idInput);
        if (isNaN(idInput)) {
          console.log("\nPlease enter Manager's numeric ID Number! ");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Manger's email? (Required) ",
      validate: emailInput => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
          return true;
        } else {
          console.log("\nPlease enter a valid email address format! ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the Manger's office number? (Required) ",
      validate: officeInput => {
        if (!officeInput) {
          console.log("\nPlease enter Manager's office number! ");
          return false;
        } else {
          return true;
        }
      }
   }
  ])
  .then(answers => {
    manager.push(answers)
    addEmployee();
  }); 
}

managerInfo();

