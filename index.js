// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'git',
        message:'Enter GitHub username.',
    },
    {
        type:'input',
        name:'title',
        message:'Enter projects name.',
    },
    {
        type:'input',
        name:'description',
        message:'Enter a brief description of project.',
    },
    {
        type:'list',
        message:'Choose a license.',
        name:'license',
        message:['MIT','None'],
    },
    {
        type:'input',
        name:'installation',
        message:'Install dependencies with npm i.',
        default:'npm i',
    },
    {
        type:'input',
        name:'usage',
        message:'What is the use of the repo?',
    },
    {
        type:'input',
        name:'contribution',
        message:'Who helped with this repo?',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.propmt(questions).then((inquirerResponse) => {
        writeToFile('README.md' , generateMarkdown({...inquirerResponse}));
    });
}

// Function call to initialize app
init();
