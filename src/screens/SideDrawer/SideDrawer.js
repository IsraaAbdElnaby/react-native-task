import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import CustomButton from '../../UI/CustomButton';

class SideDrawer extends Component {
    render() {
        return (
            <View style={[
                styles.container,
                { width: Dimensions.get("window").width * 0.8 }
            ]}>

                <ScrollView>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="ios-home" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>الرئيسية</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="ios-construct" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>طلباتى</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="md-wallet" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>المحفظة</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <MaterialIcon name="location-on" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>العناوين</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="ios-unlock" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>سياسة الضمان</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="ios-calendar" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>الشروط و الاحكام</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="ios-information-circle-outline" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>عن التطبيق</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="ios-settings" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>الاعدادات</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={styles.drawerItem}>
                            <Icon name="md-share" size={30} color="#FAC858" style={styles.drawerItemIcon} />
                            <Text>شارك التطبيق</Text>
                        </View>
                    </TouchableOpacity>
 
                    <CustomButton >تسجيل الخروج</CustomButton>

                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1,
    },
    drawerItem: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        backgroundColor: "#eee",
        flexDirection: "row-reverse"
    },
    drawerItemIcon: {
        marginLeft: 30,
    }

})
export default SideDrawer;