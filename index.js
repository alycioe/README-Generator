// Packages required for project below

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// The questions, type of input, message to show the user, and a name to identify the questions/answers are listed below
const questions = [
            {
                type: 'input',
                message: 'What title would you like to give your README file?',
                name: 'title',
            },

            {
                type: 'input',
                message: 'Give a description of your project!',
                name: 'description',
            },

            {
                type: 'input',
                message: 'How do you use or install your project?',
                name: 'installation',
            },

            {
                type: 'input',
                message: 'How do you properly use your website?',
                name: 'usage',
            },

            {
                type: 'checkbox',
                message: 'What license did you use?',
                name: 'licenses',
                choices: ['MIT', 'Apache', 'BSD', 'GPL'],
            },

            {
                type: 'input',
                message: 'Please list any other contributors.',
                name: 'contributors',
                default: '',
            },

            {
                type: 'input',
                message: 'List contact information and GitHub here:',
                name: 'contact',
                default: '',
            }
        ];

// This writes the file with the data that will be taken from the call
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// The overall called function, which uses inquirer to read the prompt questions and searches for results
// if it works properly, it will say "Creating professional README.md file..." before it posts it to the folder it is assigned to
// When it writes to the file, it will record the responses and send it to generateMarkdown, where the information/answers can be added to the corresponding category
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating professional README.md file...");
        writeToFile("./readmehere/README.md", generateMarkdown({...responses}));
    });
}

// Calls the application
init();