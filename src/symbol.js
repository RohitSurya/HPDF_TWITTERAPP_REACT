import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {  Right, Container, Button, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class Symbol extends React.Component {
  constructor(){
    super();
    this.state = {
      active:true,
    };
  }
  render() {
    return (

         <Fab
         active ={this.state.active}
         style={{backgroundColor:'#6ba3ff',marginBottom:1}}
         position="bottomRight"
         onPress={() => this.setState({ active:!this.state.active})}>
         <Icon name="plus-circle"  size={72} />
         </Fab>

    );
  }
}
