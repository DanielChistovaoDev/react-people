import React from 'react';
import { Text, View } from 'react-native';
import  Header  from './src/components/Header';
import axios from 'axios';
import  PeopleList  from './src/components/PeopleList';

export default class App extends React.Component{

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
    
    return (
      <View >

        <Header title="Meu primeiro App!" />
        <PeopleList peoples={this.state.peoples}/>

      </View>
    );
  }

}


