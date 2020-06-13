import PeoplePage from './src/pages/PeoplePage';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const stackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage,
    navigationOptions: {
      title:'Pessoas!',
      headerStyle: {
        backgroundColor: '#3074e3',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,

        flexGrow: 1,
        textAlign: 'center'
      }

    }
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: {
      title:'Detalhe'
    }
  }

});

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;


