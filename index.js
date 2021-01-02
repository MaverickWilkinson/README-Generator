const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
var prompt=inquirer.createPromptModule();
var sectionindex
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'FileName',
        message: 'What would you like the file to be called?',
        default: '',
  },
    {
    type: 'input',
    name: 'Title',
    message: 'What would you like the title to be?',
    default: '',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Description?',
    default: '',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Instruction for installation?',
    default: '',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'How to use your application?',
    default: '',
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your Email?',
    default: '',
  },
  {
    type: 'list',
    name: 'License',
    message: 'License?',
    default: '',
    choices: ['GNU','Mozilla', 'Apache', 'MIT',]
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'GitHub email?',
    default: '',
  },
  
]


// function to write README file
function writeToFile(fileName, data) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var a = fso.CreateTextFile("c:\\" + fileName + ".txt", true);
    a.WriteLine(data);
    a.Close();
}

// function to initialize program
function init() {
    inquirer.prompt(
        questions
     )
     .then(answers => {
        data = generateMarkdown(answers);
         writeToFile(answers.FileName, data)
       //InfoAsk(answers);
     })
     .catch(error => {
       if(error.isTtyError) {
           console.log("something went wrong.")
       }
     });

     
 }



init();
