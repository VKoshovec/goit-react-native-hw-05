import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from "react";
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen/PostsScreen';

const backImage = require('./src/Source/Photo_BG.png');

export default function App() {

   const [activeScreen, setActiveScreen] = useState(0);
   const changeScrennFunc = (value) => { setActiveScreen (value) }

  return (
    <PostsScreen/>
  // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //   <View style={styles.maincontainer}>
  //     <ImageBackground source={backImage} style={styles.backImg} >
  //       { activeScreen=== 0 ? <LoginScreen changeScrenn={ changeScrennFunc }/> :
  //        <RegistrationScreen changeScrenn={ changeScrennFunc }/>}
  //       </ImageBackground>
  //       <StatusBar style="auto" />  
  //   </View>
  // </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     alignItems: 'center',
//   }, 
//   backImg: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     width: '100%'
//   },
// });
