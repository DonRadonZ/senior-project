import React from 'react';
import {ImageBackground,StyleSheet,SafeAreaView} from 'react-native'; 
import { Text } from "@react-native-material/core";
import RegularText from '../../Components/Texts/RegularText';
// import MainContainer from '../../component/Container/MainContainer';
//import styles from '../../Components/Container/Backgroundstyle';
import ServiceLists from "../../Components/List/ServiceList"
import services from "../../mock/services.json"
import { useNavigation } from '@react-navigation/native';
import { Service } from '../../../App';
import HomeText from '../../Components/Texts/HomeText';
import UserList from '../../Components/List/UserList';
import users from '../../mock/user.json'
export const HomeScreen = () => {
  
    return(
        <ImageBackground
        source={require("../../../assets/Background-image.jpg")}
        style={{flex:1,
          padding:20,
          paddingTop:40,
        }}
        resizeMode="cover"
      >
        <SafeAreaView>
          <HomeText>Friend List</HomeText>
          <UserList list={users} onPress={()=>{}}/>
          <HomeText>Service</HomeText>
          <ServiceLists onPress={()=>{}} list={services}/>
          <HomeText>Notification</HomeText>
        </SafeAreaView>
                
             </ImageBackground>
                
            
        
    )
}
