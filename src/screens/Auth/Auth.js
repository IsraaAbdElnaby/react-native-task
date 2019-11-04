import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import backgroundImage from '../../assets/Home-repair.png';
import logo from '../../assets/Logo.png';
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
                        valid: validate(value, prevState.controls[key].validationRules),
                        touched: true
                    },
                    
                }
            };
        });
    };
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Image source={logo}/>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="البريد الالكتروني"
                            placeholderTextColor={"#848484"}
                            style={[styles.input, !(this.state.controls.email.valid) &&
                                this.state.controls.email.touched ? styles.invalid : null]}

                            value={this.state.controls.email.value}
                            onChangeText={(val) => this.inputState('email', val)} />
                        <TextInput
                            placeholder="كلمة المرور"
                            placeholderTextColor={"#848484"}
                            style={[styles.input, !(this.state.controls.password.valid) &&
                                this.state.controls.password.touched ? styles.invalid : null]}
                            value={this.state.controls.password.value}
                            onChangeText={(val) => this.inputState('password', val)} />
                    </View>
                    <View style={[styles.button,
                                  (!this.state.controls.email.valid ||
                                   !this.state.controls.password.valid) ? styles.disabled : null]}>
                        <Button title="تسجيل الدخول"
                            onPress={this.loginHandler}

                        />
                    </View>
                    <Text style = {{fontWeight: "bold",color: "#848484"}}>لديك حساب - تسجيل الدخول</Text>
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
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    backgroundImage: {
        width: "100%",
        flex: 1,
    },
    inputContainer: {
        width: "80%",
        marginTop: 50
    },
    input: {
        width: "100%",
        padding: 5,
        margin: 8,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    button: {
        color: "#FAC858",
        padding: 5,
        width: "80%",
        marginTop: 200
    },
    invalid: {
        borderBottomColor: 'red'
    },
    disabled: {
        
        color: '#eee',
        borderColor: '#eee'
    }
})

export default Auth;