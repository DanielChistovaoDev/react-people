import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ( { label = '', content = '-' } ) => {

    const labelStyle = [ 
                         style.cell, 
                         style.label, 
                         label.length > 8  ? style.longValue : null
                       ];

    const cellStyle = [ 
                        style.cell, 
                        style.content,
                        content.length > 35 ? style.longValue : null
                      ];

    return (
      <View style={ style.line }>
        <Text style={ labelStyle }> {label} </Text>
        <Text style={ cellStyle }> {content} </Text>
      </View>
    );

}


const style = StyleSheet.create({
    line: {
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: '#C5C5C5'
    },
    cell: {
      fontSize: 15,
      paddingLeft: 5,
  
    },
    label: {
      fontWeight: 'bold',
      flex: 1,
      fontSize: 15
    },
    content: {
        flex: 3
    },
    longValue: {
        fontSize:12
    }
  });

  export default Line;