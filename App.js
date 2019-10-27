import { Navigation } from 'react-native-navigation';
import Auth from './src/screens/Auth/Auth';

Navigation.registerComponent("task.Auth", () => Auth);

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