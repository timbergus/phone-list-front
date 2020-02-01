# Phone List Front Project

This is the frontend for the phone list application.

## Instructions

All the project has been automatized using NPM scripts. Once the site is opened, you need to login to get the token from the server. Then you will be redirected to the list view with the phones names and images. When you click any image, you will be taken to a detail page. All the loading states are intended to show them. All depend on a `delay` function on the server.

## Scripts

* __`npm start`__ → This script starts the [webpack-dev-serve](https://github.com/webpack/webpack-dev-server) to start developing your new application.
* __`npm run build`__ → This script builds the application and put the result inside the `dist` folder to be distributed to any Apache like server.
* __`npm test`__ → This script runs the tests and coverage of the application.
* __`npm run e2e`__ → This script runs the end to end test. It uses [Puppeteer](https://github.com/puppeteer/puppeteer), a tool from Google. The test needs the app to be launched and the server active (it tests a real app in a real url). The test takes a few screenshots to see the screens visited, and store them inside `__tests__/screenshots`. It also simulates a difference between the __iPhone11 Pro.png__ and the __iPhone Xr.png__, using [Pixelmatch](https://github.com/mapbox/pixelmatch). It allows us to see differences between different screenshots in time.

## Folders

### \_\_tests\_\_

It contains all the application tests. This application has no e2e tests, and there are no tools for unit testing, so it only contains a fake test to demonstrate the tool.

### config

It contains configuration files for testing, running and building the application.

### src

#### assets

It contains the assets for the application like fonts, images and icons.

#### components

It contains all the small components to build the contents of the views.

#### redux

It contains the redux elements like the store definition and the reducers.

#### routes

It contains the routes files. This files contains the navigation bars if exists, and the routes definitions for a certain container.

#### styles

It contains the auxiliary files to compose the application styles. For example, it contains variables, colors or the font declarations.

#### views

It contains the main views of the application.

## Files

### index.html

It defines the entry point of the application.

### index.jsx

It defines the entry point for the contents of the application.

### styles.css

It defines the entry point for the styles of the application.

### api.js

It defines all the endpoints used by the application.
