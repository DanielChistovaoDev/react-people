
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem'
import { ScrollView } from 'react-native-gesture-handler';

const PeopleList = props => { 

  const {peoples, onPressItem} = props;
 
  return (
      <FlatList style={styles.container}
                 data={peoples}
                 keyExtractor={item => item.login.uuid}
                 renderItem={ ( {item } )=> (

                    <PeopleListItem people={item} 
                                    navigateToPeopleDetail={onPressItem}>
                    </PeopleListItem>

                 ) }>

      </FlatList>

    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList;