# DocGawk
### Find a doctor by name or specialty!
#### _Nikki Boyd | August 10, 2018_
#### _Javascript Independent Project | Week 2_


# _About the App_
This program utilized the BetterDoctor API to assist users with finding a doctor in the area. If users need to find a new doctor, they can search for all doctors by specialty and obtain a list of all doctors (including details for their first name, last name, address, phone number, website and whether or not the doctor is accepting new patients). If users already have a preferred doctor, they may search for their contact information by either first or last name.

# _Specifications_
| Programs will... | Example input | Example output |
|--|--|--|
| Allow a user to enter a medical issue and receive a list of doctors in the Portland area that fit the search query | Prenatal care | Melanie Plaut, MD |
| Allow a user to enter a name to receive a list of doctors in the Portland area that fit the search query | First Name: Xavier | Xavier Preciado, CMT |
| Include the following information about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients  | Xavier Preciado, CMT | Address:
2348 NW Lovejoy St
Portland, OR 97210

Phone:
5032247224

Accepting New Patients:
Yes

Website:
Not found |
| Return a notification with error message if the API call results in an error (any message not a 200 OK)| Unauthorized API key | There was an error processing your request: Unauthorized |
| Return an custom error notification if no doctors meet the criteria | Nikki Boyd | Sorry, no doctors match your search. |

# _Installation for OSX_
- Download the repository from GitHub (https://github.com/nikkiboyd/DocGawk)
- Install Node.js on your machine
- Install Karma using the command `npm install -g karma-cli`
- Open the command line and run the following prompts:
    -  `npm install` - installs all dependencies in package.json to node_modules
    -  `npm run build` - prepares webpack for running application
    -  `npm test` - to see tests pass using Karma and Jasmine

# _Technologies_
- Javascript ES6
- BetterDoctor API
- jQuery
- Karma
- Jasmine
- Webpack
- ESlint
- Babel
- Bootstrap
- HTML
- CSS

# _Contact_
Please email Nikki Boyd at boyd.nikki@icloud.com with any questions.

# _License_
This software is licensed under the MIT license.

Copyright (c) 2018 Nikki Boyd
