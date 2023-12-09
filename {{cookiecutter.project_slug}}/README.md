# {{cookiecutter.project_slug}}

## Table of Contents

1. [Project Description](#project-description)
2. [Project Structure](#project-structure)
3. [Install Dependencies](#install-dependencies)
4. [Getting Started](#getting-started)
   - [Android](#android)
   - [iOS](#ios)
   - [Web](#web)
   
## Project Description

{{cookiecutter.project_description}}

## Project Structure

    .
    ├── ...
    ├── android                 
    ├── ios                     
    ├── public
    ├── src
        ├── modules
        ├── options
        ├── screens
        ├── store               
    ├── ...
    ├── README.md
    └── ...

## Getting Started

Clone the repo and install the dependencies locally:

### Install Dependencies
```sh
yarn install 
```
or
```sh
npm install --legacy-peer-deps
```

### Start the App

### Android

```sh
yarn android
```

### iOS

```sh
npx pod-install
yarn ios
```

### Web

You can build and deploy your React Native app in the web too!

To get started run:

```sh
yarn web:start
```

This will start a local development server so that you can iterate and preview your changes. Visit it at [localhost:8080](http://localhost:8080).

To build the web version of the project you can run:

```sh
yarn run web:build
```

### Testing

[Jest](https://jestjs.io/docs/getting-started) is integrated for comprehensive application testing.
- To run the tests, run the following command:
```sh
yarn test
```
or
```sh
npm run test
```
