# Doctor Lookup

#### A program that allows users to query a list of doctors. 6/30/17

#### By **Marilyn Carlin**

## Description

A website created with Javascript that allows users to enter a medical condition/symptom and query a list of doctors in the Portland, OR area able to treat the issue.

### Specs
| Behavior | Example Input | Example Output |
| :-------------     | :------------- | :------------- |
| **Homepage with form** | Homepage | Form |
| **User can submit symptom and query a list of doctors** | User is sneezing | API call to query list of doctors who treat sneezes |
| **WISH LIST: User can query location-specific results** | User is sneezing in Portland | API call to query list of doctors in Portland who treat sneezes |
| **User can query within a certain radius** | User is sneezing in Portland, and doesn't want to travel more than a mile | User can query sneeze-treating doctors in Portland within a mile of user |
| **WISH LIST: Incorporate Google Maps** | User inputs symptom(s), location, and desired travel radius | Doctor's appear as interactive Google maps points |
| **WISH LIST: User can share experience on social media** | Share to twitter... | Mcarlin27 tweets: Had a blast using Doctor Lookup to find doctors in my area who treat sneezing! *link to app* |

## Setup/Installation Requirements
1. Clone this repository.
2. In the terminal, navigate into the repository and run the following commands:
  $ npm init
  $ bower init
3. This program requires a [BetterDoctor](https://developer.betterdoctor.com/) API key. Follow the link and sign up to receive your own free API key.
4. Create a file in the top level of the directory called ".env". Store your Better Doctor API key there with the format 'exports.apiKey = "YOUR-API-KEY"'
5. In the terminal, run $ gulp build and $ gulp serve.

## Known Bugs
* Program does not return results of API call, returning a console error that displayDoctors() is not defined. Insurance and geocoding back-end not working at this time.

## Technologies Used

* HTML
* Javascript
* css
  * sass

## Support and contact details

_Contact mcarlin27 over GitHub with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Marilyn Carlin}_**
