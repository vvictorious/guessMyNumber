import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponenets Guess</Text>
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
		fontWeight: 'bold',
		color: Colors.accent500,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.accent500,
		padding: 12
	}
});
