import React, { Component } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import { Container, Header, Content, Separator, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Expo from 'expo';



export default class Footer1 extends Component {

            render() {
              return (


                  <Footer>
                     <FooterTab style={{backgroundColor:'white'}}>
                       <Button>
                         <Text style={{color:'#6ba3ff'}}>All</Text>
                       </Button>
                       <Button>
                         <Text style={{color:'grey'}}>Mentions</Text>
                       </Button>
                       <Button>
                        <Icon name="ios-settings-outline" size={30} color="blue"/>
                       </Button>
                     </FooterTab>
                   </Footer>

               );
             }
           }
