import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Navigation } from 'react-native-navigation';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

class HomeScreen extends Component {
    constructor(props){
        super(props);
        Navigation.events().bindComponent(this);
        // this.props.navigator.setOnNavigationEvent(this.navigationButtonPressed);
    }
    navigationButtonPressed = ({ buttonId }) => {
        const { componentId } = this.props;
      
        if (buttonId === 'sideMenu') {
          Navigation.mergeOptions(componentId, {
            sideMenu: {
              right: {
                visible: true,
              },
            },
          });
        }
      }
    render(){
        return(
            <View>
                <Text>On Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen;