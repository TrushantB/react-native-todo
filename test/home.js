import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
      };
  render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.redbox} >
               <View style = {styles.bluebox}/>
                <View style = {styles.redbox} />
            </View>
            <View style = {styles.blackbox} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
        backgroundColor: 'blue'
        
     },
     redbox: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row'
     },
     bluebox: {
      flex:1,
        backgroundColor: 'blue'
     },
     blackbox: {
        flex:1,
        backgroundColor: 'white',
        
     },
});
