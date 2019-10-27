import { Navigation } from 'react-native-navigation';
import Auth from './src/screens/Auth/Auth';
import HomeScreen from './src/screens/HomeScreen';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

//REGISTER SCREENS
Navigation.registerComponent("task.Auth", () => Auth);
Navigation.registerComponent("task.HomeScreen", () => HomeScreen);
Navigation.registerComponent("task.SideDrawer", () => SideDrawer);

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: "task.Auth"
        }
      }],
      options: {
        topBar: {
          title: {
            text: "تسجيل الدخول"
          }
        }
      }
    }
  }
});