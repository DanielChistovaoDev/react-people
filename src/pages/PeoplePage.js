import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import  PeopleList  from '../components/PeopleList';
import { AntDesign } from '@expo/vector-icons';

export default class PeoplePage extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      peoples: [],
      loading: false,
      error: false,
      errorMesage: null
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
        this.setState({loading: false, error: true, errorMesage: err});
      })
      
    }, 500);
  
  
  }

  renderParge() {

    if ( this.state.loading )
      return <ActivityIndicator size='large' color='#3074e3'/>
    if ( this.state.error)
      return (
                <View >
                  <AntDesign name="exclamationcircleo" style={styles.icon} size={50} /> 
                  <Text style={styles.error}> Ops... ocorreu um problema!  </Text>
                  <Text style={styles.error}> {  `${ this.state.errorMesage}` } </Text>

                </View>
              )
    
    return <PeopleList peoples={this.state.peoples}
                onPressItem={ (pageParams)=> { this.props.navigation.navigate('PeopleDetail', pageParams) } } />
  }

  render() {

    return (
      <View style={styles.container} >

        {  this.renderParge() }  

      </View>
    );
  }

}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
   },
   error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  },
  icon: {
    fontSize: 100,
    color: 'red',
    alignSelf: 'center',
    marginBottom: 10
  }
});

