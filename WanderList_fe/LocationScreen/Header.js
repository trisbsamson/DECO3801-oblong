import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity} from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import styles from '../Styles/style.js'

const Header = ({ title,navigation }) => {
  return (
    <View style={styles.header}>
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Image
        source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
      
    </View>
  );
};
/*<Text style={styles.Headertext}>{title}</Text>*/
Header.defaultProps = {
  title: "Shopping List",
};


export default Header;
