import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import { MyContext } from '../App';

import CenterMessage from '../components/CenterMessage';

import { colors } from '../theme';

const Cities = ({ navigation }) => (
  <MyContext.Consumer>
    {(val) => (
      <ScrollView contentContainerStyle={[!val.cities.length && { flex: 1 }]}>
        <View
          style={[!val.cities.length && { justifyContent: 'center', flex: 1 }]}>
          {!val.cities.length && <CenterMessage message="No saved cities!" />}
          {val.cities.map((item, index) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('City', { item: item })}
              key={index}>
              <View style={styles.cityContainer}>
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    )}
  </MyContext.Consumer>
);

export default Cities;

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  city: {
    fontSize: 20,
  },
  country: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
