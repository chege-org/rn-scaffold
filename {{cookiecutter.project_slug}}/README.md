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
    ├── android                 # Android native files
    ├── ios                     # iOS native files
    ├── public
    ├── src
        ├── modules
        ├── options
        ├── screens
        ├── store               # Redux store
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

### Setup react-native-vector-icons

Follow instructions at their [README.md](https://github.com/oblador/react-native-vector-icons/blob/master/README.md#installation)

## Running with Fastlane - I have not tested this yet

[Fastlane](https://fastlane.tools/) makes testing, building, and deploying apps
easier.

Install fastlane globally (`npm i -g fastlane` or `yarn i -g fastlane`).
Android and iOS dependencies are the same as React Native CLI.

All fastlane commands are run from the platform directory. For example, Android
commands must be run from `android/`. Fastlane should be executed using `bundle exec` to ensure dependencies are managed correctly.

The commands for Android and iOS are the same:

- Run tests: `bundle exec fastlane tests`
- Local build: `bundle exec fastlane build`
- Build and upload a beta (requires signing): `bundle exec fastlane beta`
- Build or promote a release: `bundle exec fastlane deploy`

### Android

Publish an Android app you must first create an app in the Play Console and
manually upload an APK. After the first upload run `bundle exec fastlane supply init` from `android/` to sync with the Play store. All future releases will be
uploaded automatically.

Android uses tracks. A beta release will build the app and upload to the beta
track. Deploying will promote from beta to production.

### iOS

Developers must follow fastlane's [codesigning guide](https://codesigning.guide/) for using match.

Not an Apple developer? Create an [Apple developer](https://developer.apple.com)
and follow the instructions on [codesigning guide](https://codesigning.guide/)
to setup your certificates.

## React Native Web

You can build and deploy your React Native app in the web too!

To get started run:

```sh
yarn run web:start
```

This will start a local development server so that you can iterate and preview your changes. Visit it at [localhost:8080](http://localhost:8080).

To build the web version of the project you can run:

```sh
yarn run web:build
```
