import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-menu", 30, '#FAC858'),
        Icon.getImageSource('ios-contact', 30, '#FAC858'),
        //  require('../../assets/Logo.png')
    ]).then(([menuIcon, userIcon, logo]) => {
        Navigation.setRoot({
            root: {
                sideMenu: {
                    right: {
                        component: {
                            name: "task.SideDrawer"
                        }
                    },
                    center: {
                        stack: {
                            children: [{
                                component: {
                                    name: 'task.HomeScreen',
                                    // options: {
                                    //     topBar: {
                                    //         title: {
                                    //             component:{
                                    //                 icon: logo,
                                    //                 alignment: "center",
                                                    
                                    //             }
                                           
                                                
                                    //             // color: '#FAC858'

                                    //         }
                                    //     }
                                    // },
                                },

                            }],
                            options: {
                                topBar: {
                                    background: {
                                        color: '#000000',
                                    },

                                    rightButtons: [

                                        {
                                            id: 'sideMenu',
                                            icon: menuIcon,
                                        }
                                    ],
                                    leftButtons: [
                                        {
                                            icon: userIcon
                                        }
                                    ]
                                }
                            }
                        },
                    }
                }
            }
        });
    })

};

export default startMainTabs;