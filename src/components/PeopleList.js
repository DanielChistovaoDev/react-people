
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const PeopleList = props => { 

  const textElements = props.peoples.map( (people, index) => <Text key={index}> {people.name.first} </Text>)


  return (
        <View style={styles.container}>
             { textElements }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList;