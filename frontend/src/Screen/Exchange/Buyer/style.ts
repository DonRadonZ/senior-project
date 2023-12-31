import { StyleSheet } from 'react-native';
import { ScreenWidth,ScreenHeight } from '../../../Components/shared';
import { colors } from '../../../Components/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  bankcontainer: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    //justifyContent: "center",
    alignItems: "center",
  },
  confirmationcontainer: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    //justifyContent: "center",
    alignItems: "center",
  },
  waitcontainer: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    //justifyContent: "center",
    alignItems: "center",
  },
  
  statuscontainer: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    //justifyContent: "center",
    alignItems: "center",
  },
  listcontainer: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    //justifyContent: "center",
    alignItems: "center",
  },
  owncontainer: {
    flex: 1,
    padding: 25,
    paddingTop: -15,
    justifyContent: "center",
    //alignItems: "center",
  },
  receivercontainer: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  slipcontainer: {
     flexDirection: "column",
        //justifyContent: "center",
        backgroundColor: colors.white,
        padding: 20,
        width: ScreenWidth,
        height: ScreenHeight*0.4,
        borderWidth:2,
        borderRadius: 15,
        alignItems:"flex-start",
        marginBottom: 40

  }, Reportcontainer: {
     flexDirection: "column",
        //justifyContent: "center",
        backgroundColor: colors.white,
        padding: 20,
        width: ScreenWidth,
        height: ScreenHeight*0.4,
        borderWidth:2,
        borderRadius: 15,
        alignItems:"flex-start",
        marginBottom: 40

  },
  inputContainer: {
    marginBottom: 20,
    width: ScreenWidth * 0.8,
  },
  input: {
    height: 60,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding:15,
    paddingLeft: 65,
    paddingRight:55,
    fontSize:16,
    paddingHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: colors.orange,
    paddingVertical: 24,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 18,
  },
  
  confirmationText: {
    fontSize: 18,
    marginBottom: 50,
  },
  mainText: {
    fontSize: 18,
    marginBottom: 50,
  },
  strech: {
    width: 300,
    height: 600,
    marginLeft: 20,
    
  },
  receive: {
    width: 200,
    height: 400,
    //marginLeft: 70,
    marginBottom:20
    
  }

});

export default styles