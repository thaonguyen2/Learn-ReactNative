import React, { Component } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import People from './People';
import Container from './Container';

const links = [
  { title: 'People' },
  { title: 'Films' },
  { title: 'StarShips' },
  { title: 'Vehicles' },
  { title: 'Species' },
  { title: 'Planets' },
];

class StarWars extends Component {
  renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate(item.title)}
        style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={item => item.title}
          renderItem={this.renderItem}></FlatList>
      </Container>
    );
  }
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StarWars"
          component={StarWars}
          options={{
            title: 'Star Wars',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              fontSize: 34,
              color: 'rgb(255,232,31)',
            },
          }}
        />
        <Stack.Screen
          name="People"
          component={People}
          options={{
            title: 'People',
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#ffe81f',
              backgroundColor: 'black',
            },
            headerTintColor: '#ffe81f',
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .2)',
    borderBottomWidth: 1,
  },
  text: {
    color: '#ffe81f',
    fontSize: 18,
  },
});

export default App;
