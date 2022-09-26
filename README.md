# Lely Retro React App

This is a non-profit application that aims to learn and apply new tech-stacks with the collaboration with members of front-end chapter in Lely Turkey Software.

- [Lely Retro React App](#lely-retro-react-app)
  - [React Settings](#react-settings)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
    - [`npm install`](#npm-install)
  - [Available Scripts](#available-scripts)
    - [`npm start:client`](#npm-startclient)
    - [`npm start:server`](#npm-startserver)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)
  - [Project Infrastructure](#project-infrastructure)
    - [Client Side (React)](#client-side-react)
      - [Tech-Stack](#tech-stack)
      - [To run the client side](#to-run-the-client-side)
          - [*Store management*](#store-management)
          - [*Routing*](#routing)
          - [*Page and Component Hierarchy*](#page-and-component-hierarchy)
          - [*Service Middleware*](#service-middleware)
          - [*Environment Variables*](#environment-variables)
          - [*Assets*](#assets)
          - [*Authentication*](#authentication)
    - [Server Side (Node.js)](#server-side-nodejs)
      - [Tech-Stack](#tech-stack-1)
      - [To run the server side](#to-run-the-server-side)
      - [Create an API for client side](#create-an-api-for-client-side)


## React Settings

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

After cloning repository in your local machine, you need to install dependencies and devDependencies from package.json files for each project by running `npm install`. This should be done for both projects.

`cd /client`
`npm install`

`cd /server`
`npm install`

## Available Scripts

In the project directory, you can run:

### `npm start:client`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start:server`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to run the node.js server in localhost.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Project Infrastructure

Project has 2 applications; `server side` and `client side`. Client side is under client and server side is under server folders. Developer has to work with both of the projects to simulate requests and get responses.

### Client Side (React)

#### Tech-Stack

**Framework :** React.js (CRA)
**Store management :** Redux, Redux Thunk
**CSS Framework :** Bootstrap (React-bootstrap) v5.0
**Libraries :** axios, react, bootstrap, lodash, react-redux, react-dom, redux, redux-thunk, react-router-dom
**Dev dependencies:** : node-sass, nodemon, npm-run-all, redux-devtools-extension, sass-loader

#### To run the client side
First you need to go to client folder with `cd client` from the root.

There are 2 scripts to run client side in package.json file. First one is `npm run start:client`. This script only runs the client side. If you want to run both server and client sides you can run `npm run start` script. But if you want the see the changes on server side meantime while coding you have to use `npm run start:client`

###### *Store management*

**Redux** is used for store management and **redux-thunk** for middleware. If needed, reducer can be created with same folder of the related view. All reducers are mapped in **/src/store/reducers/index.js** file. If a reducer is needed, developer has to map it under that class.

###### *Routing*

react-router-dom is used for routing. Routing logic is in **/src/components/routes/index.js** class.

If developer needs to **create a new page**, it has to be defined in the **routes**. **RequireAuth** is defined for auth pages.

Route paths are defined in **/src/config/constants/routePaths.js**. So if developer needs to make any changes in routing paths, it can be controlled in that file.

###### *Page and Component Hierarchy*

**Pages** are located under **/src/containers** folder. camel case is preferred for naming folders. A page folder includes

**index.js :** Includes page JSX.
**index.scss (Optional if needed) :** Includes page styles. Developer needs to import in page.
**reducer.js (Optional if store management used) :** Includes reducer variables of the page for store management.
**actions.js (Optional request exists on page) :** Includes actions for the page. Server requests are defined in actions.
**actionTypes.js (Optional if store management used):** Includes the string action types for actions. Defining action type in a seperate class prevents the spagetti code.

**Components** are located under **/src/components** folder. All kind of components are located under this folder. Preferably can be seperated if needed in future (modals, ui etc.).

###### *Service Middleware*

**Axios** library is integrated for fetching data. Axios object is instantiated in **/src/serviceProvide/index.js** file. Developer can control the the request flow with that class.

Making a request :
Developer has to create an action and can use the instantiated axios object (apiServices) from serviceProvider class.
###### *Environment Variables*

There is only one .env file. Api domain (http://localhost:3001/api) is set in env files with **REACT_APP_API_DOMAIN** parameter.

###### *Assets*

All assets files are located under **/src/assets** folder. **/src/assets/icons** contains svg icon. No extra library is used for svg files in project. General sass files (variables, theme etc.) are located under **/src/assets/styles**

###### *Authentication*

Client can login site with any e-mail and password. signIn API returns a dummy token and user data. This data is saved to localStorage in signIn action. 

In startup; localStorage is checked and access_token and user exists, client automatically signed in (I know this is not the true way but this is not an app that goes online). In signout action, signout api is called and localStorage is cleared.

Properties below is added in request header

```
headers: {
  common: {},
  'Accept-Language': 'en-EN',
  token: 'Bearer ' + localStorage.getItem('access_token')
},
```

If client does not have a token at first, client is redirected to login page. This logic is in **/src/components/routes/privateRoute.js** file.

### Server Side (Node.js)

#### Tech-Stack

**Framework :** Express
**Libraries :** cors, express
**Dev dependencies:** : nodemon

#### To run the server side
First you need to go to server folder with `cd client` from the root. Then run `npm run start:server`. It runs on http://localhost:3001

#### Create an API for client side
If needed API is created in /server/index.js file. data is being provided via json files in /server/data folder. Developer can create a json file to decorate the client side and create a new API that returns this json file.
