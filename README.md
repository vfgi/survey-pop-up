## Survey Test

### About
This application was created using:
- ReactJS
- Styled-Components
- Typescript
- React-hooks-form
- Redux
- Redux-Toolkit


#### Application: 

This Application can be used to render a survey pop-up in any HTML file just importing the JS script and the CSS file to relate the stylesheet.

It save every step in the localstorage so you can pickup the inserted information in the form at any stack or framework that you using today

The application will follow by open the modal(pop-up) after 2 seconds the page was loaded, then the form can be used
## Installation and Setup Instructions

#### Instructions:  

Clone down this repository. You will need `npm` or `yarn` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`

#### HTML usage instructions:  

You can also build this app and extract the .js main file and the .css main file to use in any .HTML structure

you'll need to run the build command

`npm run build`

then add this to the <Head> tag changing the js and the css file to your js and css filename

`<script defer="defer" src="main.js"></script><link href="main.css" rel="stylesheet">`

then you just need to call the component by id in a div tag inside of the <body> html tag

`<div id="survey-test-container">`

