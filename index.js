const inquirer = require("inquirer");
const fs = require("fs");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project.",
    },
    {
      type: "input",
      name: "install",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use the application?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "list",
      name: "license",
      message: "Which licence applies to your project?",
      choices: ["MIT", "ISC"],
    },
    {
      type: "input",
      name: "contribute",
      mesage: "How can another user contribute to this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "How does one test the application?",
    },
  ]);
};

const generateReadME = ({
  title,
  install,
  github,
  description,
  email,
  usage,
  license,
  contribute,
  tests,
}) =>
  `# ${title}

  [![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})

  ## Description
${description}
## Table of Contents 
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#ccontributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${install}
## Usage
${usage}
## License
This project is covered under the ${license} license.
  ## Contributing
  
${contribute}
## Tests
  
${tests}

## Questions
You can contact me at:
--[Github](https://github.com/${github})
--Email: ${email}

`;
const begin = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync("sample.md", generateReadME(answers)))
    .then(() => console.log("Successfully wrote to sample READEME."))
    .catch((err) => console.error(err));
};
begin();
