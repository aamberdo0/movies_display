
# Movies Display

## 🌠 Key Features:
A web application authenticates user log in using `Firebase` and `Firestore Database` to store database for multiple users without sending requests each time. Then, only authorized users can access the movie portal  using `Angular` and `Bootstrap` to display the requested components. There, few features will be displayed:

    1. Search movies
    2. Display Popular movies
    3. Display Trending movies
    4. Display movie details includes actors, director, summary and its rating point.
    5. Log out

## Overview
- `/` - Register account using [Firebase](https://firebase.google.com/).
- `/login` - Login account .

After authenticated: 
- `/home` - Home page.
- `/search` - Search movies.
- `/upcoming` - Upcoming movies.
- `/trending` - Popular movies.
- `/details/[id]` - Display movie details based on ID

## 🛠 Installation & Set Up
1.Install the Angular CLI

    npm install -g @angular/cli

2.Install dependencies
    
    npm i

3.Start the development server

    ng serve & Navigate to `http://localhost:4200/

## Built With
- [Angular](https://angular.io/)
- [Firebase](https://firebase.google.com/)
- [Firestore Database](https://firebase.google.com/)
- [Bootstrap](https://getbootstrap.com/)