## WOULD YOU RATHER BE

It is a web app that lets a user play the `Would You Rather?` game. The games goes like this: A user is asked a question in th form: "Would You rather [option A] or [option B]?

The app allows user to answer questions, and asee which questions they haven't answered, see how people voted, post questions, and see the rankings of users on the leaderboard.

## TL;DR

## Clone Project

* Open a terminal window on local machine.
* Create a directory on local machine to hold Repository files
* Clone applicaion form Git hub. Using the following command:
    * git clone https://github.com/darinjswilliams/WouldYourRather.git
* After all repository has been clone proceed to installation step.


## Install Project

All dependencies are managed by npm, if you need to add a pack. Add it to the the package.json file

* Install all project dependencies with `npm install`

## Start Application

* start the development server with `npm start`.

A browswer window will open on the following port.
http://localhost:3000/


### `yarn test`## Application Directory Structure
```bash
├── package.json
├── README.md - This file.
├── index.html
├── index.js
├── package.json # npm package manager file. It's unlikely that you'll need to modify this. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # Uses best practics to making an API request in Rect/Redux apps
    │   ├── authedUsers.js
    │   ├── questions.js
    │   ├── shared.js
    │   └── users.js
    ├── assets # This is the root of your app.
    ├── components # This is the root of your app. 
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── CurrentLeaderjs
    │   ├── LeaderBoard.js
    │   ├── Login.js
    │   ├── Nav.js
    │   ├── NewQuestion.js
    │   ├── NoDataFound.js
    │   ├── PollDetailQuestion.js
    │   ├── PollResults.js
    │   └── questions.js
    ├── middleware # A JavaScript API for the provided Udacity backend. Uses thunk
    ├── reducers # Describes how an application state changes
    │   ├── authedUsers.js
    │   ├── index.js
    │   ├── users.js
    │   └── questions.js
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── utils
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
