/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Redux/Home';
import reg1_2 from './src/Onboarding/onboarding';

//import App from './src/Navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => reg1_2);
