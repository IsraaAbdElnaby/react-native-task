import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import backgroundImage from '../../assets/Home-repair.png';
import validate from '../../utility/validation';

class Auth extends Component {
    state = {
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },

            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            }
        }
    }
    loginHandler = () => {
        startMainTabs();
    }
    inputState = (key, value) => {
        this.setState(prevState => { //UPDATING CONTROLS OBJECT OF KEY
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules)
                    },
                    touched: true
                }
            }; 
        });
    };
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder="البريد الالكتروني" 
                            placeholderTextColor={"#848484"}
                            style={styles.input}
                            underlineColorAndroid = ""
                            value={this.state.controls.email.value}
                            style ={!(this.state.controls.email.valid) && 
                                      this.state.controls.email.touched ? styles.invalid : null}
                            onChangeText = {(val)=>this.inputState('email', val)} />
                        <TextInput 
                            placeholder="كلمة المرور" 
                            placeholderTextColor={"#848484"}
                            style={styles.input}
                            value={this.state.controls.password.value}
                            style ={!(this.state.controls.password.valid) && 
                                this.state.controls.password.touched ? styles.invalid : null}
                            onChangeText = {(val)=>this.inputState('password', val)} />
                    </View>
                    <Button title="تسجيل الدخول" 
                    onPress={this.loginHandler} 
                    color="#FAC858" 
                    disabled = {(!this.state.controls.email.valid ||
                                !this.state.controls.password.valid) ? styles.disabled : null} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0.5,0.5,0.5,0.5)'

    },
    backgroundImage: {
        width: "100%",
        flex: 1,
        backgroundColor: "black"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        width: "100%",
        padding: 5,
        margin: 8,
        borderBottomColor: "#848484",
        borderBottomWidth: 2
    },
    invalid: {
        borderColor: 'red'
    },
    disabled: {
        backgroundColor: '#eee',
        color:'#aaa',
        borderColor: '#aaa'
    }
})

export default Auth;