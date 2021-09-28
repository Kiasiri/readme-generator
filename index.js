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
  credit,
  usage,
  license,
  contribute,
  tests,
}) =>
  `# ${title}
## Description
${description}
## Table of Contents 
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
##Installation
${install}
## Usage
${usage}
## Credits
${credit}.
## License
[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})
##Contributing
${contribute}
##Tests
${tests}
##Questions
You can contact me at:
--[Github](https://github.com/${github})
--Email: ${email}

## Badges


`;
const begin = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync("READ.md", generateReadME(answers)))
    .then(() => console.log("Successfully wrote to README"))
    .catch((err) => console.error(err));
};
begin();
