import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./avatar.jpg')}></Image>
          </View>
          <View>
            <Text style={[{color: 'white'}, styles.cardName]}>Thao Nguyen</Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>Full-Stack Developer</Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>A full-stack developer: iOS, flutter, react native, react js, node js, flask, laravel,...</Text>
          </View>
        </View>
      </View>
    )
  }
}

const profileCardColor = 'lightgoldenrodyellow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    alignItems: 'center'
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  cardName: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 24,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 3
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 1
  },
  cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  cardDescription: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    fontStyle: 'italic'
  }
})