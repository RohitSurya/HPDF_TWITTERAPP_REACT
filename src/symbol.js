import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {  Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Symbol extends React.Component {
  render() {
    return (
      <Right>
      <Icon name="plus-circle"  size={72} color="#6ba3ff" underlayColor="transparent"/>
      </Right>
    );
  }
}
