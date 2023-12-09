# React Native Scaffold

## Included Features

- **Organized Project Structure**: A structured directory for more streamlined development.

- **[React Navigation](https://reactnavigation.org/docs/getting-started/)**: A basic configuration to commence the development of your application's navigation.

- **Redux Integration with [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)**: A basic configuration to commence the development of your application's state management.

- **Code Formatting**:
    - [ESLint](https://eslint.org/docs/latest/use/getting-started): Ensures consistent code quality.
    - [Prettier](https://prettier.io/docs/en/): Provides uniform code formatting.


- **Testing**: [Jest](https://jestjs.io/docs/getting-started) integration for comprehensive application testing.

- **React Native Web**: Transition to web development with an already configured setup.

---

## Project Folder Structure:
```
├── android/               
├── ios/                    
├── README.md
├── app.json
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── __tests__/
│   ├── assets/
│   ├── modules/
│   ├── options/
│   ├── screens/
│   ├── store/
│   └── utils/
└── yarn.lock

```

---

## Getting Started

### Prerequisites

Ensure "Cookiecutter" is installed on your system. If not available, please install using [this link](https://cookiecutter.readthedocs.io/en/latest/installation.html).

### Initial Setup

1. **Initiating the Project**:
    - Open a terminal on your local system.
    - Navigate to the directory where you want to create your new React Native project.
    - Run the following command:
      ```bash
      cookiecutter gh:james-chege/rn-scaffold
      ```
    - Provide the necessary inputs, including your project name.

2. **Accessing Your Project**:
    - Once the setup completes, navigate to the project directory.
    - Refer to the instructions in `<project_name>/Readme` for further guidance.

### Overview

This scaffold provides a foundational structure for your React Native projects, aiming to enhance your development efficiency.

## Additional Configurations 

### **Icomoon Integration 🌔**

#### **1. Using the `selection.json` with Icomoon App**:

- Visit the [Icomoon app](https://icomoon.io/app/).
- Select "Import Icons" at the top-right.
- Upload the `selection.json` file located in `src/utils/`.
- Add or modify icons as required.
- Click `Generate Font` to update the font pack.
- Download the updated font pack.

#### **2. Updating the Font**:

- Extract the downloaded font pack.
- Replace the `Icomoon.ttf` in `src/assets/fonts` with the new file.
- Update the `selection.json` file in `src/utils` with the new file.

#### **iOS Configuration**:
- Re-build the project to update the font.

#### **Android Configuration**:

1. **Place Font in Assets**:
    - Replace the `Icomoon.ttf` in `android/app/src/main/assets/fonts` with the new file. If the `fonts` directory does not exist, create it.

2. **Reference in Application**:
    - Ensure the font family in your code corresponds to the font file name, excluding its extension, specifically 'Icomoon'.

#### **Usage in React Native Components**:

With the `CustomIcon.js` utility:

To use custom icons in your components:

```javascript
import CustomIcon from './src/utils/CustomIcon.js';

<CustomIcon name="my-icon" size={30} color="#900" />
```
