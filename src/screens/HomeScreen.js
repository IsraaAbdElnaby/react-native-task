import React, { Component } from 'react';
import { Text, View, StatusBar, Dimensions, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';


class HomeScreen extends Component {
  constructor(props) {
    super(props);


    const fakeData = [];
    for (let i = 0; i < 10; i++) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: 1,
          image: faker.image.avatar(),
          name: 'محمد عبد الرحيم',
          description: 'كهربائى'
        },
      });
    }

    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, row) => {
      row.width = Dimensions.get('window').width;
      row.height = 100;
      // switch (type) {
      //   case 'NORMAL':
      //     row.width = Dimensions.get('window').width;
      //     row.height = 100;
      //     break;
      //   default:
      //     row.width = 0;
      //     row.height = 0;
      //     break;
      // }
    })

    Navigation.events().bindComponent(this);
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

  rowRenderer = (type, data) => {
    const { image, name, description } = data.item;
    return (
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.body}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity><Text style={styles.txt}>التفاصيل</Text></TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <Button title='حجز' color='#FAC858' />
        </View>
      </View>
    )
  }

  render() {
    return (


      <View style={styles.container}>
        <View style={styles.navbar}>
          {/* <View style={styles.navbtn}> */}
            <Button title='كل الخدمات' color='#FAC858' />
          {/* </View> */}
          {/* <View style={styles.navbtn}> */}
            <Button title='المهندسين' color='#FAC858' />
          {/* </View> */}
          {/* <View style={styles.navbtn}> */}
            <Button title='اليوم' color='#FAC858' />
          {/* </View> */}
        </View>
        <RecyclerListView
          style={{ flex: 1 }}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 1,
    minWidth: 1
  },
  navbar: {
    backgroundColor: 'rgba(52,52,52,1)',
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    
  },
  txt: {
    color: '#F6813A'
  },
  row: {
    flexDirection: "row-reverse"
  },
  body: {
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    height: 80,
    width: 80
  },
  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    opacity: 0.5
  },
  btn: {
    position: "absolute",
    right: 10,
    marginTop: 8,
    height: 5,
    width: 50
  },
  navbtn: {
    height: 5,
    padding: 5
  }
});
export default HomeScreen;