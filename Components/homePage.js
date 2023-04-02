import React from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Header,Image,Input,Button } from "react-native-elements";
import { vw,vh,size } from "./responsive/size";

function HomeScreen({navigation}) {

  const navigater =()=>{
    navigation.navigate('SecondScreen');
  }

    return (
      <View style={{ flex: 1,backgroundColor:'white'}}>
        <Header
          containerStyle={{elevation: 20}}
          backgroundColor="white"
          centerComponent={<Text style={{fontFamily:'Signika-Bold',color:'black',fontSize:size(20)}}>Profile Details</Text>}
          rightComponent={{icon:'search', color:'black'}}
          leftComponent={{icon:'arrow-back', color:'black'}}
        />
    
        <View style={styles.index}>
          {/* Main Page */}
          <View style={styles.subview}>
                {/* packageBOx */}
              <View style={{alignItems:'center'}}>
                  <Image source={require('./assets/profile.jpg')} style={styles.image} />
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{...styles.textColor,fontSize:size(18),fontFamily:'Signika-SemiBold',marginBottom:vh(10)}}>Jhon Smitha</Text>
                  <Text style={{...styles.textColor,fontSize:size(20),fontFamily:'Signika-SemiBold'}}>Account Credit: <Text style={{color:'#52cbbf',fontFamily:'Signika-SemiBold'}}>$200.00</Text> </Text>
                  </View>
              </View>

              <View style={{marginTop:vh(40),margin:size(20)}}>
  
               <Input placeholder="Deepak Mishra"  rightIcon={{ type: 'font-awesome', name: 'pencil',size:size(20),style:{paddingRight:size(10),opacity:0.6}}} inputContainerStyle={{borderWidth:size(1),borderRadius:size(30),backgroundColor:'#f3f3f3',borderColor:'#f3f3f3'}} placeholderTextColor={'black'} inputStyle={{marginLeft:size(10),fontFamily:'Signika-SemiBold'}}  />                
              <Input placeholder="+918789033735" rightIcon={{ type: 'font-awesome', name: 'pencil',size:size(20),style:{paddingRight:size(10),opacity:0.6}}}  inputContainerStyle={{borderWidth:size(1),borderRadius:size(30),backgroundColor:'#f3f3f3',borderColor:'#f3f3f3'}} placeholderTextColor={'black'} inputStyle={{marginLeft:size(10),fontFamily:'Signika-SemiBold'}} />                
              <Input placeholder="deepakdevlo@outlook.com" rightIcon={{ type: 'font-awesome', name: 'pencil',size:size(20),style:{paddingRight:size(10),opacity:0.6}}}  inputContainerStyle={{borderWidth:size(1),borderRadius:size(30),backgroundColor:'#f3f3f3',borderColor:'#f3f3f3'}} placeholderTextColor={'black'} inputStyle={{marginLeft:size(10),fontFamily:'Signika-SemiBold'}} />                

          
              <View>
                <Button buttonStyle={{margin:size(10),borderRadius:50,backgroundColor:'#52cbbf'}}  title={"Save Now"} titleStyle={{fontFamily:'Signika-SemiBold'}}  onPress={navigater} />
              </View>
              </View>
          </View>
      </View>
      </View>
    );
}


const styles = StyleSheet.create({

  index:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:size(30),
    backgroundColor:'rgba(20,192,201,0.1)',
    
    
  },

  subview:{
    flex:1,
    width:'100%',
    backgroundColor:'white',
    borderRadius:size(30),
    justifyContent:'center',
    
  },
  textColor:{
    color:'black',
  },

  image:{height:size(180),width:size(180),borderRadius:size(100)},


})

export default HomeScreen;
