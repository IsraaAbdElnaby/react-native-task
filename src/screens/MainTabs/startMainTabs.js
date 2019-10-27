import { Navigation } from 'react-native-navigation';

const startMainTabs = () => {
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
                        // children:[{
                        component: {
                            name: 'task.HomeScreen'
                        },
                        // }],
                        options: {
                            topBar: {
                                rightButtons: [{
                                    text: 'كل الخدمات',
                                    color: '#FAC858'
                                }]
                            }
                        }
                    },
                }
            }
        }
    });
};

export default startMainTabs;