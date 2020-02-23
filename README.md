# Sorting Hat

## Description
This project was practice all the concepts learned in the first milestone of the front end section of NSS.

We used Bootstrap throughout the project, starting with a jumbotron welcoming the user to the app. Upon clicking the button on the jumbotron, a click event function written in main.js would print a Bootstrap form to the DOM. 

In the form, you can submit a student's name. Upon clicking the submit button, a click event function adds the name of the student is to an array in main.js, simultaneously assigning the student an ID and assigning the student to a random Hogwarts house. All house options were stored in a separate array.

The same submit button also triggers a printToDOM function written in main.js that prints the students array to the DOM. The student card builder function uses Bootstrap cards to organize the data and contains an "expel" button at the bottom of the card. Upon clicking the "expel" button, a click event is triggered that deletes the student from the students array and recalls the student cards printer function, re-printing the remaining students in the array to the DOM. 

## Screenshots
Welcome jumbotron
![welcome to hogwarts jumbotron](./screenshots/jumbotron.png)

Add student form
![form to submit new student](./screenshots/new-student-form.png)

Student cards printed to DOM
![individual student cards](./screenshots/student-cards.png)

## How to run
1. Clone this repo
1. Make sure you have http-server installed via npm. If not get it [here](https://www.npmjs.com/package/http-server)
1. On your command line, run `hs -p 9999`
1. In your browser, go to `http://localhost:9999`