import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f3f3f3',
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    Button:{
      width:150,
      height:40,
      backgroundColor:"#007FFF",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:15
    },
    ButtonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color:"#ffffff",
      textAlign:"center"
    },
  });

  export default styles;