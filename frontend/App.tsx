import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screen
import { Home } from './src/Screen/Home/home';
import { Balance } from './src/Screen/Balance/balance';
import { QRScan } from './src/Screen/QRScan/qrscan';
import { Exchange } from './src/Screen/Exchange/exchange';
import ExchangeScreen from './src/Screen/Exchange';
import { Profile } from './src/Screen/Profile/profile';



//icon
//import {FontAwesome} from 'react-native-vector-icons'




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Balance" component={Balance}options={{headerShown:false}} />
      <Tab.Screen name="QRScan" component={QRScan}options={{headerShown:false}} />
      <Tab.Screen name="Exchange" component={Exchange} options={{headerShown:false}} />
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}