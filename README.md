# Bouquet - Wine Tasting App

Capstone project for the General Assembly React Development course. 

## Description and features

This project is a web app where user can search for a wine family and get information on aromas and scents present in this type of wine, as well as overview and where the wine comes from. A user can add new wine, edit and delete. It's a full CRUD app. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The backend functionality is provided by  [Back4App](https://www.back4app.com/).

The maps are built with [React Google Charts](https://react-google-charts.com/).

Design is created with [Material UI](https://material-ui.com/).


## Prerequisites & Installation
Follow these steps to get started:

1. Clone this repo:

```git clone https://github.com/irinakramer/bouquet.git```

2. Install your depencies:

```npm install``` 


3. Next you'll need API keys from Back4App and from Google Charts. Add them inside your .env.local:

```
REACT_APP_PARSE_APPLICATION_ID=your_key_here
REACT_APP_PARSE_JAVASCRIPT_KEY=your_key_here
REACT_APP_GEOCHARTS_API_KEY=your_key_here
```

4. Run `npm start` in your terminal and go to `http:localhost:3000` to check that your app is working. If you don't see content on the page, check that your api keys are set up correctly.



## Demo
Homepage:

![Bouquet - homepage](/public/images/bouquet-home-screenshot.png?raw=true "Bouquet wine tasting - homepage")


Wine page:

![Bouquet - wine page](/public/images/bouquet-wine-screenshot.png?raw=true "Bouquet wine tasting - wine page")


## Author
Code is created by Irina Kramer.
