import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image} from 'react-native';
import Judul from './Components/Judul';

type Props = {};
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		    <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Judul title="FORM"/>
        <Text style={styles.judul}>Hello !</Text>
        <Text style={styles.tulis}>Nama : Diva Audri Maharani</Text>
		    <Text style={styles.tulis}>No : 10</Text>
		    <Text style={styles.tulis}>Kelas : XI RPL 4</Text>
		    <Image source={require('./divau.jpg')} style={{width: 340, height: 433}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  judul: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  tulis: {
	fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
