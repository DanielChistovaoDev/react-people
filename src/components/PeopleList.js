
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem'

const PeopleList = props => { 

  const {peoples, onPressItem} = props;

  const textElements = peoples.map( (people, index) => { 
                
                return ( 
                          <PeopleListItem people={people} key={index} navigateToPeopleDetail={onPressItem}></PeopleListItem>
                       );
  
              });

 
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