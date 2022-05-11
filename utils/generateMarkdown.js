// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

#Table of Contents
  <ul>
    <li>
      <a href #description>Description</a>
    </li>
    <li>
      <a href #installation>Installation</a>
    </li>
    <li>
      <a href #usage>Usage</a>
    </li>
    <li>
      <a href #contribution>Contribution</a>
    </li>
    <li>
      <a href #test>Test</a>
    </li>
    <li>
      <a href #questions>Questions</a>
    </li>
  </ul>

#Description
  <p id="description">${description}</p>

  #Installation
  <p id="installation">${installation}</p>
`;
}

module.exports = generateMarkdown;
