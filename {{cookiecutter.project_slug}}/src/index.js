import {AppRegistry} from 'react-native';
import App from '../App';
import './utils/icons';

const appName = '{{cookiecutter.project_slug}}';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  // Mount the react-native app in the "root" div of index.html
  rootTag: document.getElementById('root'),
});
