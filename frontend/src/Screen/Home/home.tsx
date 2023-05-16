import React from 'react';
import {ImageBackground,StyleSheet} from 'react-native'; 
import { Text } from "@react-native-material/core";
import RegularText from '../../Components/Texts/RegularText';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
// import MainContainer from '../../component/Container/MainContainer';
import styles from '../../Components/Container/Backgroundstyle';

export const Home = () =>{
    return(
        <ImageBackground
      source={require("../../../assets/Background-image.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
                <RegularText>Home</RegularText>
             </ImageBackground>
                
            
        
    )
}
