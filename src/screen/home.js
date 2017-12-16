import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right,  Button,  Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Symbol from '../symbol.js';

export default class Home extends React.Component {
  render() {
    return (
    <Container>

         <Content>
           <Card>
             <CardItem>
               <Left>
                 <Thumbnail source={require('./Img/pro1.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Dhanny</Text>
                   <Text style={{color:'grey'}}>Home</Text>
                 </Body>
                 <Text style={{color:'grey'}}>30m</Text>
               </Left>
             </CardItem>
             <CardItem cardBody>
               <Image source={require('./Img/feed1.png')} style={{height: 200, width: null, flex: 1}}/>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent>
                   <Icon active name="comment-o" color="grey" size={20} />
                   <Text style={{color:'grey',paddingLeft:3}}>60</Text>
                 </Button>
               </Left>
               <Body>
                 <Button transparent>
                   <Icon active name="retweet" color="grey" size={20} />
                   <Text style={{flex:1,flexDirection:'row',color:'grey',paddingLeft:3}}>2</Text>
                 </Button>
                </Body>
                 <Button transparent>
                   <Icon active name="heart-o" color="grey" size={20} />
                   <Text style={{color:'grey',paddingLeft:3}}>19</Text>
                 </Button>
               <Right>
                 <Button transparent>
                   <Icon active name="envelope-o" color="grey" size={20} />
                 </Button>
               </Right>
             </CardItem>
           </Card>

           <Card>
             <CardItem>
               <Left>
                 <Thumbnail source={require('./Img/pro2.jpg')} />
                 <Body>

                   <Text style={{fontWeight:'bold'}}>Rohit</Text>
                   <Text style={{color:'grey'}}>@Trip</Text>
                 </Body>
                 

                    <Text style={{color:'grey'}}>24m</Text>

               </Left>
               <Symbol />
             </CardItem>

             <CardItem cardBody>

               <Image source={require('./Img/feed2.png')} style={{height: 200, width: null, flex: 1}}/>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent>
                   <Icon active name="comment-o" color="grey" size={20} />
                   <Text style={{color:'grey',paddingLeft:3}}>50</Text>
                 </Button>
               </Left>
               <Body>
                 <Button transparent>
                   <Icon active name="retweet" color="grey" size={20}/>
                   <Text  style={{flex:1,flexDirection:'row',color:'grey',paddingLeft:3}}>3</Text>
                 </Button>
               </Body>
                 <Button transparent>
                   <Icon active name="heart-o"  color="grey" size={20}/>
                   <Text style={{color:'grey',paddingLeft:3}}>45</Text>
                 </Button>

               <Right>
                 <Button transparent>
                   <Icon active name="envelope-o" color="grey"  size={20}/>
                 </Button>
               </Right>
             </CardItem>
           </Card>
         </Content>

       </Container>

    );
  }
}
