# React Native Scaffold 🚀

🌠 **What's Included?** 🌠

- 📁 **Organized Project Structure**: Streamline your development with an easy-to-navigate structure.

- 🛠️ **Code Formatting**:
    - ESLint 🧐: Maintain consistent code quality.
    - Prettier 🎨: Ensure consistent code formatting.

- 🌐 **React Navigation**: Set sail with a basic configuration to start building your app's navigation.

- 🧪 **Testing**: Jest is onboard to help you validate every bit of your application.

- 🌍 **React Native Web**: Seamlessly transition to the web with a preconfigured setup.

---

🌳 **Project Folder Structure**:

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

Before diving in, here are some prerequisites and steps to get started with this scaffold:

## Prerequisites 📋

Ensure you have **Cookiecutter** installed on your system. If it's missing, follow [this link](https://cookiecutter.readthedocs.io/en/latest/installation.html) to set sail.

## Set Sail 🛫

1. **Initiate the Project**:
    - Open a terminal window on your local machine.
    - Direct your compass to the directory where you wish to anchor your new React Native project.
    - Execute the following incantation:
      ```bash
      cookiecutter gh:james-chege/rn-scaffold
      ```
    - Answer the siren calls and enter the name of your project. The scaffold will manifest a new React Native project for you.

2. **Navigate Your Ship**:
    - Once the map (scaffold) has finished charting out your journey, venture into the project's heart.
    - Heed the scrolls found in `<project_name>/Readme` to embark on your new quest.

## Setting Sun 🌅

This scaffold offers a treasure trove for your React Native voyages, so you can brave the high seas of development with a seasoned crew and a sturdy ship. Sail forth, and may your codes be ever bug-free! 🏴‍☠️


## Additional Configurations 🔧

### Configuring Icomoon Fonts 🌙

#### **1. Using the `selection.json` on Icomoon App**:

- Head over to the [Icomoon app](https://icomoon.io/app/).

- Click on the "Import Icons" button at the top-right corner.

- Upload the `selection.json` file from `src/utils/` in your project. This will load the icons and selections from the file into the Icomoon app.

- From here, you can:
    - **Extend**: Add more icons to the selection by choosing from available libraries or uploading your own SVGs.
    - **Modify**: Adjust existing icons if needed.

- Once you've made your desired changes or additions, click on `Generate Font` at the bottom. This will produce an updated font pack with your icons.

- Download the generated font pack.

#### **2. Integration in React Native**:

- Extract the downloaded font pack.

- Overwrite the existing `Icomoon.ttf` in `src/assets/fonts` with the new one from the font pack.

#### **iOS Configuration**:

1. **Add Font to Xcode**:

    - Open your iOS project in Xcode (usually located under `ios/[YourAppName].xcodeproj`).
    - Drag and drop the `Icomoon.ttf` file (from `src/assets/fonts`) into the project navigator in Xcode.

2. **Ensure Font is Included in the Build**:

    - Select the project in the project navigator, then select the main target.
    - Go to the "Build Phases" tab and expand the "Copy Bundle Resources" section.
    - Ensure `Icomoon.ttf` is listed. If not, click the '+' and add it.

#### **Android Configuration**:

1. **Place the Font in Assets**:

    - Copy the `Icomoon.ttf` file to `android/app/src/main/assets/fonts` (create the `fonts` directory if it doesn't exist).

2. **Reference in Application**:

    - Although explicit configurations aren't necessary in the application itself (as React Native will auto-link fonts from `assets/fonts`), ensure the font family in your code matches the font file name without its extension, i.e., 'Icomoon'.

#### **Usage in React Native Components**:

With the `CutomIcon.js` utility:

Import the custom icon component in your React component:

```javascript
import CustomIcon from './src/utils/CutomIcon.js';
```

Use your custom icons:

```javascript
<CustomIcon name="my-icon" size={30} color="#900" />
```
