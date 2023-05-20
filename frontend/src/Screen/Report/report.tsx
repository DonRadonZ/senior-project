import React,{FunctionComponent} from 'react';
import {TouchableOpacity,ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { Text } from '@react-native-material/core';

import ReportButton from '../../Components/Button/ReportButton';
import styles from '../../Components/Container/Backgroundstyle';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
//import { IStackScreenProps } from '../../Components/library/StackScreenProps';

import 'react-native-gesture-handler'

//screen
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../App';




const Stack = createStackNavigator()





export const Exchange = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  

  return(
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
    
      
      
      </ImageBackground>
    
      
  )
}