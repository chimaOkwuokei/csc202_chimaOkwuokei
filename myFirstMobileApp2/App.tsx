/**import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Image, SafeAreaView, Platform } from 'react-native';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component4 from './src/components/Component4';
import Component5 from './src/components/Component5';
import Component6 from './src/components/Component6';
import Component7 from './src/components/Component7';
import Component8 from './src/components/Component8';
import Component9 from './src/components/Component9';
import Component10 from './src/components/Component10';
//Let's create a simple separator component that will only be used here in App.tsx
const Separator: React.FC = () => {
 return <View style={styles.separator}></View>
}
const App: React.FC = () => {
 return (
 <SafeAreaView style={styles.container}>
 <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
 <ScrollView>
 <View style={styles.screenHeader}>
 <Image style={styles.logo}
 source={require('./src/img/PAU-Logo-Website.png')}
 />
 </View>

<View style={styles.screenBody}>
 <Component1 />
 <Separator/>
 <Component2 name='Pius'/>
 <Component2 />
 <Separator/>
 <Component4 />
 <Separator/>
 <Component5/>
 <Separator/>
 <Component6/>
 <Separator/>
 <Component7/>
 <Separator/>
 <Component9/>

 </View>
 </ScrollView>
 </KeyboardAvoidingView>
 </SafeAreaView>
 );
 /**return(
  <SafeAreaView style={[styles.container, {paddingTop: 30}]}>
  <Component8 />
  </SafeAreaView>
 );*/
/** }
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'lightblue',
alignItems: 'stretch',
justifyContent: 'center',
padding: 15
},

separator: {
backgroundColor: '#eee',
height: 3,
width: '100%'
},
screenHeader: {
flex: 1,
paddingTop: 27,
justifyContent: 'center',
backgroundColor: 'darkblue'
},
screenBody: {
flex: 6,
justifyContent: 'center',
},
logo:{
alignSelf:'center',
width: 200,
height: 82
}
});
export default App;*/
/**
 * To finalize installation of react-native-gesture-handler,
 * add the following at the top (make sure it's at the top and there's nothing else before it) 
 * of your entry file, such as App.tsx:
 */
/**import 'react-native-gesture-handler';

import React from 'react';
import { Image, StyleSheet } from 'react-native';
// Before rendering any navigation stack, enableScreens for memory optimisation. See https://reactnavigation.org/docs/react-native-screens/
import { enableScreens } from 'react-native-screens';
enableScreens();

/** 
 * Import createStackNavigator that we will use to create the stack navigator for the home page
 We shall see below how they are used
 */
 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import App1 from './App1';
 import App2 from './App2';
 import { NavigationContainer } from '@react-navigation/native';
 //Below requires npm install react-native-vector-icons @types/react-native-vector-icons. Using it for Tab Navigator icons
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 const Tab = createBottomTabNavigator();
 const App: React.FC = () => {
  //below are some optional props that can be passed to Tab.Navigator. You can try the code with and without options
  const tabProps = {
  initialRouteName: 'App1Screen',
  tabBarOptions:{
  activeTintColor: 'green',
  inactiveTintColor: 'grey',
  style: {
  backgroundColor: '#eee',
  },
  backBehavior: 'history'//Behaviour when system back is touched. Options are none, initialRoute, order, history. This seems to be buggy
  },
  lazy: true //default is true
  }
  return (
  <NavigationContainer>
  <Tab.Navigator {...tabProps}>
  <Tab.Screen
  name="App1Screen" 
  component={App1} 
  options={{
  tabBarLabel: 'App 1',
  tabBarIcon: ({ color, size }) => (
  <MaterialCommunityIcons name="home" color={color} size={size} />
  )
  }}
  />
  <Tab.Screen
  name="App2Screen"
  component={App2} 
  options={{
  tabBarLabel: 'App 2',
  tabBarIcon: ({ color, size }) => (
  <MaterialCommunityIcons name="bell" color={color} size={size} />
  )
  }}
  />
  </Tab.Navigator>
  </NavigationContainer>
  );
 }
 export default App