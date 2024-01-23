
# Movies Display

## 🌠 Key Features:
A web application authenticates user log in using `Firebase` and `Firestore Database` to store for multiple users without sending requests each time. Then, only authorized users can access the movie portal using `Angular`. There, few features will be displayed:

    1. Search movies
    2. Display Popular movies
    3. Display Trending movies
    4. Display movie details includes actors, director, summary and its rating point.
    5. Log out

## Overview 
- `/` - Register account using [Firebase](https://firebase.google.com/).
- `/login` - Login account .
- `/home` - Home page.
- `/search` - Search movies.
- `/upcoming` - Upcoming movies.
- `/trending` - Popular movies.
- `/details/[id]` - Display movie details based on ID

## [Live Demo] 🚀🚀
https://github.com/aamberdo0/movies_display/assets/122891092/f3b3e3ab-e199-4d04-85ac-e01e1ed28d4e


## 🛠 Installation & Set Up ⚒️⚒️
1.Install the Angular CLI

    npm install -g @angular/cli

2.Install dependencies
    
    npm i

3.Start the development server

    ng serve & Navigate to `http://localhost:4200/

## Challenges + Lesson Learned: 
- This is my first time using Firebase, including Firestore Database and Firebase Hosting. The difficulty is to store user log in information in both Firestore and Firebase Authenticate so that user can be authenticated using one email. Then Firebase Hosting got me in trouble with its subdirectory folder as I couldn't display the landing page when deploy the web server. 

## Future Improvement:
- For furture features, this application can allow authenticated user to create their own movie list and store the list using Firestore Database. Furthermore, users can write, update and delete their own movie review. 

## Built With
- [Angular](https://angular.io/)
- [Firebase](https://firebase.google.com/)
- [Firestore Database](https://firebase.google.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
