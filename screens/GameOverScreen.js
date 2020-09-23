import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={500}
          source={require("../assets/success.png")}
          // source={{uri: 'https://www.roughguides.com/wp-content/uploads/2016/02/matterhorn-shutterstock_1118486243-1680x1050.jpg'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </BodyText>
      </View>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  highlight: {
    color: Colors.accent,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
