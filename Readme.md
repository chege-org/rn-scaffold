# React Native Scaffold

## Included Features

- **Organized Project Structure** 💼: A structured directory for more streamlined development.

- **Code Formatting** 📖:
    - ESLint: Ensures consistent code quality.
    - Prettier: Provides uniform code formatting.

- **React Navigation** 🌐: A basic configuration to commence the development of your application's navigation.

- **Testing** 🧪: Jest integration for comprehensive application testing.

- **React Native Web** 🖥️: Transition to web development with an already configured setup.

---

## Project Folder Structure:
```
├── android/               
├── ios/                    
├── Gemfile
├── Gemfile.lock
├── README.md
├── app.json
├── babel.config.js
├── config-overrides.js
├── fileTransformer.js
├── heroku.yml
├── index.js
├── jest.config.js
├── jestSetup.js
├── metro.config.js
├── native.config.js
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── __tests__/
│   │   └── App-test.tsx
│   ├── assets/
│   │   └── fonts/
│   │       └── Icomoon.ttf
│   ├── index.js
│   ├── modules/
│   │   ├── index.js
│   │   ├── modules.js
│   │   ├── package.json
│   │   └── yourapp.js
│   ├── options/
│   │   ├── index.js
│   │   └── options.js
│   ├── screens/
│   │   ├── index.js
│   │   └── package.json
│   ├── store/
│   │   ├── README.md
│   │   ├── custom/
│   │   ├── index.js
│   │   └── package.json
│   └── utils/
│       ├── CutomIcon.js
│       ├── icons.js
│       └── selection.json
├── temp_directory/
├── tsconfig.json
└── yarn.lock
```

---

## Getting Started

### Prerequisites 🔍

Ensure "Cookiecutter" is installed on your system. If not available, please install using [this link](https://cookiecutter.readthedocs.io/en/latest/installation.html).

### Initial Setup

1. **Initiating the Project** ⚙️:
    - Open a terminal on your local system.
    - Navigate to the directory where you want to create your new React Native project.
    - Run the following command:
      ```bash
      cookiecutter gh:james-chege/rn-scaffold
      ```
    - Provide the necessary inputs, including your project name.

2. **Accessing Your Project** 📁:
    - Once the setup completes, navigate to the project directory.
    - Refer to the instructions in `<project_name>/Readme` for further guidance.

### Overview

This scaffold provides a foundational structure for your React Native projects, aiming to enhance your development efficiency.

## Additional Configurations 🔧

### Configuring Icomoon Fonts 🌙

#### **1. Using the `selection.json` with Icomoon App**:

- Visit the [Icomoon app](https://icomoon.io/app/).
- Select "Import Icons" at the top-right.
- Upload the `selection.json` file located in `src/utils/`.
- Add or modify icons as required.
- Click `Generate Font` to update the font pack.
- Download the updated font pack.

#### **2. Integration into React Native**:

- Extract the downloaded font pack.
- Replace the `Icomoon.ttf` in `src/assets/fonts` with the new file.

#### **iOS Configuration**:

1. **Add Font to Xcode**:
    - Open your iOS project in Xcode.
    - Drag and drop the `Icomoon.ttf` (from `src/assets/fonts`) into the project navigator in Xcode.

2. **Include Font in the Build**:
    - Select the project in the navigator, then the main target.
    - Navigate to the "Build Phases" tab and expand "Copy Bundle Resources".
    - Ensure `Icomoon.ttf` is listed. If not, add it.

#### **Android Configuration**:

1. **Place Font in Assets**:
    - Move the `Icomoon.ttf` file to `android/app/src/main/assets/fonts`. Create the `fonts` directory if necessary.

2. **Reference in Application**:
    - Ensure the font family in your code corresponds to the font file name, excluding its extension, specifically 'Icomoon'.

#### **Usage in React Native Components**:

With the `CustomIcon.js` utility:

To use custom icons in your components:

```javascript
import CustomIcon from './src/utils/CustomIcon.js';

<CustomIcon name="my-icon" size={30} color="#900" />
```
