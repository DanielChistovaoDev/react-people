import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={style.container} >
        <Text style={style.title} > {props.title} </Text>
    </View>
);

const containerStyle = {
    backgroundColor: '#3074e3', 
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
}

const titleStyle = {
    fontSize: 50,
    color: '#fff'
}

const style = StyleSheet.create({
    container: containerStyle,
    title: titleStyle
})


export default Header;
