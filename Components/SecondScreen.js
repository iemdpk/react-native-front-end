import React from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Header,Image,Input,Button,CheckBox,Icon } from "react-native-elements";
import { vw,vh,size } from "./responsive/size";
import Lottie from 'lottie-react-native';

function SecondScreen({navigation}) {
    return (<View style={styles.subview}>
                {/* packageBOx */}
              <View style={{alignItems:'center'}}>
                    <Lottie source={require('./assets/96833-login.json')} autoPlay loop style={{ height:size(300),width:size(300)}} />
              </View>

                <View style={{alignItems:'flex-start',marginLeft:size(40)}}>
                        <Text style={{color:'#0cccd1',fontSize:size(20),fontFamily:'Signika-Bold'}}>Welcome Back!</Text>
                        <Text style={{...styles.textColor,fontSize:size(15),fontFamily:'Signika-Regular'}}>Sign in to continue</Text>
                </View>

                <View style={{marginTop:vh(40),margin:size(20)}}>
                    <Input placeholder="email" leftIcon={{ type: 'font-awesome',color:'#0cccd1',name: 'envelope',size:size(20),style:{paddingLeft:size(10),opacity:0.6}}}  inputContainerStyle={{borderWidth:size(1),borderRadius:size(30),backgroundColor:'#f3f3f3',borderColor:'#f3f3f3'}} placeholderTextColor={'rgba(1,1,1,0.4)'} inputStyle={{marginLeft:size(10),fontFamily:'Signika-SemiBold'}} />                
                    <Input secureTextEntry={true} placeholder="password" leftIcon={{ type: 'font-awesome',color:'#0cccd1',name: 'lock',size:size(20),style:{paddingLeft:size(10),opacity:0.6}}}  inputContainerStyle={{borderWidth:size(1),borderRadius:size(30),backgroundColor:'#f3f3f3',borderColor:'#f3f3f3'}} placeholderTextColor={'rgba(1,1,1,0.4)'} inputStyle={{marginLeft:size(10),fontFamily:'Signika-SemiBold'}} />                
                <View>

            <View style={{flexDirection:'row',marginLeft:size(20),marginRight:size(20)}}>
                    <View style={{width:'50%',alignItems:'flex-start',flexDirection:'row'}}>
                    <Icon name="check-square" size={size(20)} color={"#0cccd1"} style={{marginRight:size(5)}} type="font-awesome"/>
                    <Text style={{...styles.textColor,fontFamily:'Signika-Regular'}}>Remember me</Text>
                    </View>
                    <View style={{width:'50%',alignItems:'flex-end'}}>
                    <Text style={{...styles.textColor,fontFamily:'Signika-Regular'}}>Forget Password</Text>
                    </View>
            </View>

                <View style={{marginTop:size(30)}}>
                <Button buttonStyle={{margin:size(10),borderRadius:50,backgroundColor:'#0cccd1'}} title={"Sign in"}  titleStyle={{fontFamily:'Signika-Regular'}} onPress={()=>{ navigation.navigate('ThirdScreen'); }} />
                <View style={{alignItems:'center',margin:size(10)}}>
                <Text style={{...styles.textColor,fontFamily:'Signika-Regular'}}>Already Have an Account? <Text style={{color:'#0cccd1',fontWeight:'bold'}}>Sign Up!</Text></Text>
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

export default SecondScreen;