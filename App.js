import PeoplePage from './src/pages/PeoplePage';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const stackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage,
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) => {
      const peopleName = navigation.state.params.people.name.first;
      return ({
        title: peopleName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        },
      })
    }
  },


}, {
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#2acccc',
        borderWidth: 1,
        borderBottomColor: 'white',
    },
    headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
  },

  }

);

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;


