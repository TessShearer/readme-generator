function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    case "Creative Commons":
      return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)"
      break;
    case "Eclipse":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      break;
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "The Organization for Ethical Source":
      return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
      break;
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      break;
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break;
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case "Open Data Commons":
      return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
      break;
    case "Perl":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      break;
    case "Zlib":
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
      break;
    case "Unlicense":
      return ""
      break;
  }
  //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
}

function renderLicenseSection(license) {
  if (license == "Unlicense") {
    return "This project remains unlicensed."
  }
  else {
    return ("This project is licensed under " + license + ". Click the badge at the top of the page for additional information on the license.")
  }
 }

function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
# ${data.title}

# Table of Contents
[Description](#description)
<br>
[Installation](#installation)
<br>
[Usage](#usage)
<br>
[License](#license)
<br>
[Contributing](#contributing)
<br>
[Tests](#tests)
<br>
[Questions](#questions)

# Description
  ${data.description}

# Installation
  ${data.installation}

# Usage
  ${data.usage}

# License
  ${renderLicenseSection(data.license)}

# Contributing
  ${data.contribute}

# Tests
  ${data.test}

# Questions
Contact Information: <br>
-Email: [${data.email}](mailto:${data.email}) <br>
-GitHub: 
`;

}

module.exports = generateMarkdown;
