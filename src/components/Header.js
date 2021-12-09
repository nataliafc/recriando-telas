import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const accountIcon = <Icon name="mdi-account" size={18} color='white' />;

const Header = () => {
    return(
        <>
      <View style={{ padding: 10, backgroundColor: 'darkgreen', flexDirection: 'row', justifyContent: 'space-between'}}> 
        <Text style={{ color: 'white', fontSize: 22 }}>NOME DO APP</Text>
        <View>{accountIcon}</View>
      </View>
      </>
    )
}

export default Header;