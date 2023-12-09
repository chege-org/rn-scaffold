# {{cookiecutter.project_slug}}

## Table of Contents

1. [Project Description](#project-description)
2. [Project Structure](#project-structure)
3. [Modules](#modules)
4. [Getting Started: Frontend](#getting-started-frontend)
   - [Installation](#installation)
   - [Running with Fastlane](#running-with-fastlane)
      - [Android](#android-1)
      - [iOS](#ios-1)
      - [React Native Web](#react-native-web)
5. [Getting Started: Backend](backend#readme)

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


## Installation

After cloning the repo, install the dependencies locally with [Yarn](https://yarnpkg.com/):

```sh
yarn install
```

### Android

```sh
yarn android
```

### iOS

```sh
npx pod-install
yarn ios
```

## React Native Web

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
