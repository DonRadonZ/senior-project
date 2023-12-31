import React from "react";
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import { Button,Box } from "@react-native-material/core";

import styles from "./style";

import ProfileButton from "../../../Components/Button/ProfileButton";

//navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

export const ReConfirmationScreen = ({
  // accountNumber,
  // amount,
  // description,
}) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.receivercontainer}
    resizeMode="cover"
    >
      <View style={{marginBottom:100,flexDirection:'row',marginRight: 200}}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{navigation.goBack()}}>
                <AntDesign name="arrowleft" size={24} color="black" />    
                <Text style={{ marginTop: 2 }}>Back</Text>
                </TouchableOpacity>
          <Text style={{left:60,top:4,fontSize:25,bottom:20}}>Buyer Slip</Text>
      </View>
    {/* <Box style={styles.slipcontainer}>
      <Text style={styles.confirmationText}>
        Account Number: 123-456-7890
      </Text>
      <Text style={styles.confirmationText}>Amount: 3000</Text>
      <Text style={styles.confirmationText}>Note: Help </Text>
      </Box> */}
      
      <ProfileButton onPress={()=>{navigation.navigate('BuyerResult')}} >ReConfirm</ProfileButton>
    </ImageBackground>
  );
};



