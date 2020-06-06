import React from "react";
import { StyleSheet, View, Text } from "react-native";


const PeopleListItem =props =>{

    return (
        <View  style={styles.line}>  
            <Text style={styles.lineText}> {props.people.name.first} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor:'#bbb',
    
        //FlexBox
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 20,
        
    }
});

export default PeopleListItem;