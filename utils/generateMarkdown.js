// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  * Description
  * Installation
  * Usage
  * License
  * Contributors
  ## Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Usage 
  ${data.Usage}
  ## License
  ${data.License}
  ## Contributors
  ${data.Contributors}
`;
}

module.exports = generateMarkdown;
