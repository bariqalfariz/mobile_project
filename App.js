import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       
       <Judul title= "LOGIN"/>
       <Judul title= "BIODATA"/>
        <Text>Bariq Alfariz Arunha</Text>
        <Text>   XI RPL 3</Text>
        <Text>   10</Text>
        <Image source ={require('./imgs/fofo.jpg')} style={{width: 100, height: 100}}/>
        
      </View>

    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  }
  
 });