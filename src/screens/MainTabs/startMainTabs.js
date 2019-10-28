import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-menu", 30, '#FAC858'),
    ]).then(([menuIcon]) => {
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
                                    name: 'task.HomeScreen'
                                },
                            }],
                            options: {
                                topBar: {
                                    rightButtons: [
                                        // {
                                        //     text: 'كل الخدمات',
                                        //     color: '#FAC858'
                                        // },
                                        {
                                            id: 'sideMenu',
                                            icon: menuIcon
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