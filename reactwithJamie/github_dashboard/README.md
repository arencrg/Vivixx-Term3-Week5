# Git Wars

This app was an exercise in using create-react-app with API JSON requests and props. It asks the user to input 2 Github usernames, and then an algorithm calculates who the winner is.

### Features

- PlayerProfile Component

    This component displays the profile information fetched from the API JSON request. It will display the name, profile picture, and the number of public repos, followers, and following in a card.

- Judging Component

    This component will perform the calculations with the algorithm to decide who the winner is. The criteria are the number of public repos and the number followers.

- Search Function

    This function allows the user to get information in the form of a JSON from the API request once a username is typed in and the submit button is clicked.

- React-Materialize

    I used React-Materilize to try and make the app a bit more presentable. I only used Row, Col, CardPanel, and a  button + icon.

### Usage

Type `npm start` in your Terminal/Powershell or whatever you use, and it will open in `localhost:3000`
