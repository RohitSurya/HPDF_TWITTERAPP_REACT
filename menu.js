import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { Container, Header,  Drawer, Content, Card, Separator, CardItem, Thumbnail, List, ListItem, Left, Body, Right, Button,  Title } from 'native-base';
import  IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Profile from './src/screen/profile.js';
import Lists from './src/screen/lists.js';
import Moments from './src/screen/moments.js';
import Highlights from './src/screen/highlights.js';
import Setting from './src/screen/setting.js';
import Help from './src/screen/help.js';

export default class menu extends Component {
  render(){
    return(
            <Container>

              <Content style={{backgroundColor:'#ffffff',paddingTop:30}}>

              <List>
              <ListItem icon>
                <Left>
                    <Image source={require('./src/screen/Img/pro.jpg')}
                     style={{width: 50, height: 50,borderRadius:50,paddingTop:10}} />
                   </Left>
                    <Body>
                      <Text>Rohit Surya</Text>
                      <Text note>@rohit97</Text>
                    </Body>
                    </ListItem>
         
         <ListItem>
         <Left>
         <Text>690<Text note> Following</Text></Text>
        </Left>
         <Body><Text>652<Text note> Followers</Text></Text>
          </Body>
          </ListItem>              
             
               <ListItem icon>
                <Left>
                  <IonIcon name="ios-person-outline" size={22} />
                </Left>
                <Body>
                  <Text>Profile</Text>
                </Body>
                </ListItem>
                
                <ListItem icon>
                <Left>
                  <IonIcon name="ios-list-outline" size={22} />
                </Left>
                <Body>
                  <Text>Lists</Text>
                </Body>
                </ListItem>
               
                 <ListItem icon>
                <Left>
                  <IonIcon name="ios-flash-outline" size={22} />
                </Left>
                <Body>
                  <Text>Moments</Text>
                </Body>
                </ListItem>
               
               <ListItem icon>
                <Left>
                  <IonIcon name="ios-browsers-outline" size={22} />
                </Left>
                <Body>
                  <Text>Highlights</Text>
                </Body>
              </ListItem>
             
             <ListItem>
              <Text>Settings and privacy</Text>
              </ListItem>
             
             <ListItem>
              <Text>Help Centre</Text>
              </ListItem> 
            </List>
          </Content>

              <Footer style={{backgroundColor:'white'}}>
              <Left  style={{ padding:5}}>
              <Icon name="moon-o" color="#6ba3ff" size={22} />
              </Left>
              <Right  style={{ padding:5}}>
              <Icon name="qrcode"  color="#6ba3ff" size={22} />
              </Right>
              </Footer>

            </Container>
          );
        }
}
