const inquirer = require("inquirer");
const fs = require("fs");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please type a description of your project",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "instal",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "instal",
      message: "What are the installation instructions?",
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
  ]);
};

const generateReadME = (title, instal, github, description, email) => {
  const template = `# ${title}
## Description
${description}
## Table of Contents 
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Question](#questions)
##Installation
${instal}
## Usage

## Credits
My collaboraters were .
## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
##Contributing

##Tests

##Questions
--Github: https://github.com/${github}
--Email: ${email}

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.`;
  fs.writeFile("README.md", template, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
};
