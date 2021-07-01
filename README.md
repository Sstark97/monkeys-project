# The Agile Monkeys Test

The test would consist of creating a project where we show the catalog
of a company that sells children's clothing.

----
# Toolkits used:

## React
Awesome JavaScript library for building user interfaces or UI components whic makes browsing through the web really fast and smooth.

## Webpack
I wanted to test my skills with the webpack and also did a webpack configuration to use TypeScript, when I switched to JavaScript I decided to leave the webpack configuration to not waste development time

## Babel
Babel gives me the opportunity to compile react with webpack 

## ESLint
I made an eslint setup for improve and correct my code
## Chakra UI 
I used Chakra UI because it's a really simple UI framework which is pretty, modular and really strong on its accessibility and I wanted to improve my skills with it.

## Redux
We are using Redux to manage a global state for all the project.

## Axios
I used Axios to build a custom hook that managed all the request to the API.

## React Router
It's easy and fast to handle routes with these library

----

### Problems in the develop

- Firstly I started the project with TypeScript, but after the first hours of development I realized that I was not so good whith TypeScript and it was going to give me more complications than solutions. These is the reason that I changed to JavaScript

- For manage the state I used redux, although when the project was already very advanced I discovered React Query, and in this case it could have been manage the state easier with React-Query than with Redux. I considered switching to React Query, but in the state of development 
it wasn't worth it 

----

### src Folder Structure

```
src/
|-- actions/
|   |-- index.js
|-- assets/
|   |-- static/
|   |   |-- cremas.png
|   |   |
|   |   |-- logo.png
|   |   |
|   |   |-- notFound.png
|   |   |
|   |   |-- rebajas.png
|   |-- styles/
|   |   |-- categories.scss
|   |   |
|   |   |-- index.scss
|   |   |
|   |   |-- Search.scss
|-- components/
|   |-- CategoryChild.jsx
|   |   |
|   |   |
|   |-- ProductChild.jsx
|   |   |
|   |   |
|   |-- ShopCard.jsx
|   |   |
|   |   |
|   |-- StatsCard.jsx
|   |   |
|   |   |
|   |-- SubCategories.jsx
|-- containers/
|   |-- CategoriesNavBar.jsx
|   |   |
|   |   |
|   |-- Footer.jsx
|   |   |
|   |   |
|   |-- Layout.jsx
|   |   |
|   |   |
|   |-- ShopCarousel.jsx
|   |   |
|   |   |
|   |-- ShopHeader.jsx
|   |   |
|   |   |
|   |-- StatsContainer.jsx
|-- hooks/
|   |-- useAxios.js
|-- pages/
|   |-- Categories.jsx
|   |   |
|   |   |
|   |-- Home.jsx   
|   |   |
|   |   |
|   |-- Products.jsx
|-- reducers/
|   |-- index.js 
|-- routes/
|   |-- App.jsx
|-- index.js
```

# Contributing

In order to contribute I recomend to check undestand a bit about the Folder structure and the libraries mentioned on top. It is important since you'll be encountering most of the components are created using Chakra-UI styles.

It is important to keep the code simple and tiny in order to not struggle refactoring mistakes and headachese when reading the code.

## Getting Started

### Prerequisities

-   Git
-   [Node](https://nodejs.org/en/)
-   A clone of the [Monkeys-Project](https://github.com/Sstark97/monkeys-project) on your local machine

### Installation

1. `cd monkeys-project` to go into the project root.
2. `npm install` to install project dependencies.

### Running locally

1. `npm run start` to start the development server.
2. Go to `http://localhost:3000` to view the site in your browser.

### Building for production

1. `npm run build` to build the production site.

Production files are located in the `dist` directory.


