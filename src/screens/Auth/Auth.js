import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class Auth extends Component {
    loginHandler = () => {
        startMainTabs();
    }
    render(){
        return(
            <View>
                <Text>Auth Screen</Text>
                <Button title = "تسجيل الدخول" onPress = {this.loginHandler} color= "#FAC858"/>
            </View>
        );
    }
}

export default Auth;