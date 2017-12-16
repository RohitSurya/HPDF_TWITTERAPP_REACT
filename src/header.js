import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { Container, Header, Drawer, Content, Left, Body, Tabs, Tab, TabHeading, Right, Button, Icon, Title } from 'native-base';
import SideBar from '../menu.js';

import Home from './screen/home.js';
import Search from './screen/search.js';
import Notifications from './screen/notification.js';
import Message from './screen/message.js';
import Footer1  from './footer.js';



export default class Header1 extends Component {
  closeDrawer(){
    this._drawer._root.close()
  };
  openDrawer()  {
    this._drawer._root.open()
  }
  render() {
    return (

    <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
<Content>

 <TouchableOpacity
 onPress={() => this.openDrawer()} >
<View style={{flex: 1, flexDirection: 'row',padding:10,paddingTop:30}}>
   <Image source={require('./screen/Img/pro.jpg')}
   style={{width: 50, height: 50,borderRadius:50 ,paddingTop:50}} />
   <Text style={{color:'black',paddingLeft:30,paddingTop:15,fontSize:20,fontWeight:'bold'}}>Home</Text>
</View>
</TouchableOpacity>

     <Tabs >
        <Tab heading={ <TabHeading><Icon name="md-home"  /></TabHeading>}>
          <Home />
        </Tab>
          <Tab heading={ <TabHeading><Icon name="md-search"  /></TabHeading>}>
            <Search />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-notifications-outline" /></TabHeading>}>
            <Notifications />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-mail" /></TabHeading>}>
            <Message />
          </Tab>
        </Tabs>
      </Content>

        <Footer1/>
      </Drawer>
    );
  }
}
