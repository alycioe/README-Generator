// This displays a link to the image of the license below
function renderLicenseBadge(license) {
    if (license !== 'none') {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    } else {
    return '';
    }
  }
  
  // This function includes the markdown language that correlates to each section and pulls the data from the responses found in the index.js file to display them here
  function generateMarkdown(data) {
    return `# ${data.title}
  
## Description
${data.description}
  
## Installation Instructions
${data.installation}
  
## Usage
${data.usage}
  
## Licenses
${data.licenses}
${renderLicenseBadge(data.licenses)}
      
## Contributors
${data.contributors}
  
## Contact
${data.contact}
  `;
  }
  
  // exports module information found in generate markdown to the location it needs to go
  module.exports = generateMarkdown;
  