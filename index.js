const Team = require('./src/generateHtml');
const inquirer = require('inquirer');

const userInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's name? (Required) ",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter Manager's name! ");
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
                if (isNAN(idInput)) {
                  console.log("Please enter Manager's numeric ID Number! ");
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
                  true;
                } else {
                  console.log("Please enter a valid email address! ");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the Manger's office number? (Required) ",
            validate: officeInput => {
                if (officeInput) {
                  console.log("Please enter Manager's office number! ");
                  return false;
                } else {
                  return true;
                }
            }
        }
    ]);
};

function initTeam() {
    userInput()
      .then(answers);
    console.log(answers);
}

initTeam();