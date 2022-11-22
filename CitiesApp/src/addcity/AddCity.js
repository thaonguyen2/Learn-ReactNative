import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import uuid from 'react-native-uuid';

import { MyContext } from '../App';

import { colors } from '../theme';

export default class AddCity extends React.Component {
  state = {
    city: '',
    country: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = (val) => {
    if (this.state.city === '' || this.state.country === '') {
      alert('Please complete form');
    }

    const city = {
      city: this.state.city,
      country: this.state.country,
      id: uuid.v4(),
      locations: [],
    };

    val.addCity(city);
    this.setState(
      {
        city: '',
        country: '',
      },
      () => {
        this.props.navigation.navigate('Cities');
      },
    );
  };

  render() {
    return (
      <MyContext.Consumer>
        {(val) => (
          <View style={styles.container}>
            <Text style={styles.heading}>Cities</Text>
            <TextInput
              style={styles.input}
              placeholder="City name"
              onChangeText={(text) => this.onChangeText('city', text)}
              value={this.state.city}></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Country name"
              onChangeText={(text) => this.onChangeText('country', text)}
              value={this.state.country}></TextInput>
            <TouchableOpacity onPress={() => this.submit(val)}>
              <View style={styles.button}>
                <Text>Add city</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
});
