![alt text](/my-app/src/image/logo.png)
# Project SportSee 

This is a dashboard page for the user, the user will can see is key data : the time of a session, is weight,... . 
He will see the data on a week or day per day.

## 1 Install
Clone the project to your computer.
Install all the dependencies.
For that launch a new terminal and in my-app use the next command : npm install
And in P9-front-end-dashboard use the next command : yarn install

## 2 Launch
To launch the project use the next command : 
    •in my-app : npm start
    •in P9-front-end-dashboard : yarn dev


*Dependencies*

    •React
    •React-Dom
    •nodeJS
    •yarn
    •Recharts

## 3 Endpoints
This project includes four endpoints that you will be able to use:

• http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

• http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.

• http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.

• http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

Examples of queries :

• http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
• http://localhost:3000/user/18 - Retrieves user 18's main information.