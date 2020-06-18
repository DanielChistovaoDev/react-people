import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component{

    render() {
      const { people } = this.props.navigation.state.params;

        return (
          <View  style={style.container}>
            <Image source={ {uri: people.picture.large} }
                   style={style.avatar}>
            </Image>

            <View style={ style.detailContainer }>
              <Line label="Email:" content={people.email}></Line>
              <Line label="Cidade:" content={people.location.city}></Line>
              <Line label="Estado:" content={people.location.state}></Line>
              <Line label="Tel:" content={people.phone}></Line>
              <Line label="Cel:" content={people.cell}></Line>
              <Line label="Nacionalidade:" content={people.nat}></Line>
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
  }

});