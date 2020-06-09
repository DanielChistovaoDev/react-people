import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../util/'

const PeopleListItem =props =>{

    const {people} = props;
    const {title, first, last} = people.name;
    const imgUri = people.picture.thumbnail;

    return (
        
        <TouchableOpacity >

            <View  style={styles.line}>
                <Image style={styles.avatar} source={{uri: imgUri }}/>
                
                <Text style={styles.lineText}> 
                    {`${ capitalizeFirstLetter(title)} `  +
                     `${ capitalizeFirstLetter(first)} `  +
                     `${capitalizeFirstLetter(last)}`}
                </Text>
            </View>

        </TouchableOpacity>
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
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft:15,
        borderRadius: 50
    }

});

export default PeopleListItem;