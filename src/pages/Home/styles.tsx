import { StyleSheet } from "react-native";
import homeTheme from "../../themes/hometheme";

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
      backgroundColor:homeTheme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:15
    },
    ButtonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color:homeTheme.colors.text,
      textAlign:"center"
    },
  });

  export default styles;