import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import  PeopleList  from '../components/PeopleList';

export default class PeoplePage extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      peoples: []
    };
  }

  componentDidMount(){

    const urlApi = 'https://randomuser.me/api/?nat=br&results=5';

    /*Promises*/
    axios.get(urlApi).then(response => {
      const {results} = response.data

      this.setState({
        peoples: results
      });
      
    }).catch(err => {
      console.log('erro =>', err);
    })
  
  }

  render() {
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View >

        <PeopleList peoples={this.state.peoples}
                    onPressItem={ (pageParams)=> { this.props.navigation.navigate('PeopleDetail', pageParams) } } />

      </View>
    );
  }

}


