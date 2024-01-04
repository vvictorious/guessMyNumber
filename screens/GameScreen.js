import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";


const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponenets Guess</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{currentGuess}</Text>
      </View>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
	numberContainer: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: 24,
		borderRadius: 8,
		margin: 24,
		alignItems: 'center',
		justifyContent: 'center'
	},
	numberText: {
		color: Colors.accent500,
		fontSize: 36,
		fontWeight: 'bold'
	}
});
