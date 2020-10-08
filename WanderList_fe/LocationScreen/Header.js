import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity} from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import styles from '../style/style.js'


const Header = ({ title,navigation }) => {
  return (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={navigation.openDrawer}>
          <Image
            source={{uri:'https://www.iconsdb.com/icons/preview/white/menu-4-xxl.png'}}
            style={{ width: 25, height: 25 }}
          />
    </TouchableOpacity>
      <Text style={styles.Headertext}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

// const styles = StyleSheet.create({
//   headerContainer: {
//     height: 60,
//     padding: 15,
//     backgroundColor: "darkslateblue",
//     flexDirection:'row'

//   },
//   Headertext: {
//     color: "white",
//     fontSize: 23,
//     textAlign: "center",
//     flex:0.85
//   },
// });

export default Header;
