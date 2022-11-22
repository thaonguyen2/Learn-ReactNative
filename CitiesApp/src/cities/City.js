import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { MyContext } from '../App';

import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class City extends React.Component {
  state = {
    name: '',
    info: '',
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  addLocation = (val) => {
    if (this.state.name === '' || this.state.info === '') return;
    const { route, navigation } = this.props;
    const { item } = route.params;

    const location = {
      name: this.state.name,
      info: this.state.info,
    };
    console.log(location);
    val.addLocation(location, item);

    this.setState({ name: '', info: '' });
  };

  render() {
    const { route, navigation } = this.props;
    const { item } = route.params;
    return (
      <MyContext.Consumer>
        {(val) => (
          <View style={{ flex: 1 }}>
            <ScrollView
              contentContainerStyle={[!item.locations.length && { flex: 1 }]}>
              <View
                style={[
                  !item.locations.length && {
                    flex: 1,
                    justifyContent: 'center',
                  },
                ]}>
                {!item.locations.length && (
                  <CenterMessage message="No location for this city!"></CenterMessage>
                )}
                {item.locations.map((location, index) => (
                  <View key={index} style={styles.locationContainer}>
                    <Text style={styles.locationName}>{location.name}</Text>
                    <Text>{location.info}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
            <TextInput
              onChangeText={(val) => this.onChangeText('name', val)}
              placeholder="Location name"
              value={this.state.name}
              style={styles.input}
              placeholderTextColor="grey"
            />
            <TextInput
              onChangeText={(val) => this.onChangeText('info', val)}
              placeholder="Location info"
              value={this.state.info}
              style={[styles.input, styles.input2]}
              placeholderTextColor="grey"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => this.addLocation(val)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Add Location</Text>
                </View>
              </TouchableOpacity>
            </View>
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
  locationContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  locationName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
