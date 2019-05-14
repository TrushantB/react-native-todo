import React from 'react';
import { StyleSheet, Text, View,Image  } from 'react-native';

export default class Splash extends React.Component {
    static navigationOptions = {
        header: null,
      };
      componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Homescreen')
        },3000)
      }
      
  render() {
      
    return (
      <View style={styles.container}>
        <Image source={require('./assets/giphy.gif')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
