import { View, Text, StyleSheet } from "react-native";
const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponenets Guess</Text>
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
});
