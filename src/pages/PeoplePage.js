import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import  PeopleList  from '../components/PeopleList';

export default class PeoplePage extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      peoples: [],
      loading: false
    };
  }

  componentDidMount(){
    this.setState({loading: true});

    const urlApi = 'https://randomuser.me/api/?nat=br&results=15';

    setTimeout(() => {
      /*Promises*/
      axios.get(urlApi).then(response => {
        const {results} = response.data
  
        this.setState({
          peoples: results
        });
        
        this.setState({loading: false});
      }).catch(err => {
        console.log('erro =>', err);
        this.setState({loading: false});
      })
      
    }, 1500);
  
  
  }

  render() {
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View >

        <ActivityIndicator size='large' color='#3074e3'>

        </ActivityIndicator>

        <PeopleList peoples={this.state.peoples}
                    onPressItem={ (pageParams)=> { this.props.navigation.navigate('PeopleDetail', pageParams) } } />

      </View>
    );
  }

}


