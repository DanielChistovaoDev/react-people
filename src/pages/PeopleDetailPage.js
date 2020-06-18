import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class PeopleDetailPage extends React.Component{

    render() {
      const { people } = this.props.navigation.state.params;

        return (
          <View  style={style.container}>
            <Image source={ {uri: people.picture.large} }
                   style={style.avatar}>
            </Image>

            <View style={ style.detailContainer }>

              <View style={ style.line }>
                <Text style={ [ style.cell, style.label] }> Email: </Text>
                <Text style={ [ style.cell,  ] }> {people.email} </Text>
              </View>

            </View>

          </View>
        );
    }
}

const style = StyleSheet.create({
  avatar:{
    aspectRatio: 1
  },
  container:{
    padding: 15,

  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1
  },
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5'
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,

  },
  label: {
    fontWeight: 'bold'
  }

});