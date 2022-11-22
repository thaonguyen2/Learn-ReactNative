import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Cities from './cities/Cities';
import AddCity from './addcity/AddCity';
import City from './cities/City';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Cities" component={Cities} />
      <HomeStack.Screen name="City" component={City} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export const MyContext = React.createContext();

export default class App extends React.Component {
  state = {cities: []};

  addCity = city => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({cities});
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id;
    });
    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({
      cities,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation,
        }}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Add City" component={AddCity} />
          </Tab.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
    );
  }
}
