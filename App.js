import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right,  Button,  Title } from 'native-base';
import Expo from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header1 from './src/header.js';



export default class App extends React.Component {
  render() {
    return (
    <Container>
<Header1 />

       </Container>

    );
  }
}
