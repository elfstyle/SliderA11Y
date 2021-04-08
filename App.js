import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Can change the value if numberOfSteps more than 7</Text>
      <Slider minimumValue={0} maximumValue={6} step={1} value={3} />

      <Text>Can only increase the value if numberOfSteps eq 6</Text>
      <Slider minimumValue={0} maximumValue={5} step={1} value={3} />

      <Text>Can't move slider if numberOfSteps less than 5</Text>
      <Slider minimumValue={0} maximumValue={4} step={1} value={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
