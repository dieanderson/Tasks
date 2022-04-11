/**
 * @format
 */

 import 'react-native-gesture-handler';
 import Icon from 'react-native-vector-icons/FontAwesome'
 import { AppRegistry } from 'react-native'
 import Navigator from './src/Navigator'
 import { name as appName } from './app.json'
 import {LogBox } from 'react-native';
 
 
 LogBox.ignoreLogs(['Reanimated 2','Sending']);
 Icon.loadFont();
 AppRegistry.registerComponent(appName, () => Navigator)
 