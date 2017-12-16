import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image} from 'react-native';
import  IonIcon from 'react-native-vector-icons/Ionicons';


export default class Search extends Component<{}> {


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.SectionStyle}>

        <IonIcon
        name="md-arrow-back"
         color="#6ba3ff"
         size={32} />
          <TextInput
              style={{flex:1,paddingLeft:30,fontSize:18}}
              placeholder="Search Twitter"
              underlineColorAndroid="transparent"
          />

        </View>
        
      </View>

    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
      backgroundColor: 'white',
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:25,
    paddingLeft:15,
    height:65,

},
});

module.export = Search;
