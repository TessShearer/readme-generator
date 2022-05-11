// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = READMEData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief paragraph description of your project, why you made it, and what it does',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions on how to install or view your project. Do not include usage in this section.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter instructions!');
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your project',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions!');
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license did you use?',
            choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 4', 'Option 5', 'Option 6']
          },
          {
            type: 'input',
            name: 'contribute',
            message: 'Provide contribution guidelines for your project',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter guidelines!');
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide instructions on one or more ways to test your product',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter guidelines!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'what is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter username!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                }
            }
        },
    ]
    )
};


// TODO: Create a function to write README file
function writeToFile(fileName, READMEData) { 
    
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
