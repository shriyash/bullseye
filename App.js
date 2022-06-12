import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [text, onChangeText] = React.useState("");
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);

  let total = parseInt(number1)+parseInt(number2)+parseInt(number3);
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titleText}>
      {'\n'}{'\n'}{'\t'}Bullseye
      </Text>

      <Text style={styles.titleText}>
      {'\n'}{'\n'}{'\t'}Round One
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Round one score"
        keyboardType="numeric"
      />

      <Text style={styles.titleText}>
      {'\n'}{'\n'}{'\t'}Round Two
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Round two score"
        keyboardType="numeric"
      />


      <Text style={styles.titleText}>
      {'\n'}{'\n'}{'\t'}Round Three
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="Round three score"
        keyboardType="numeric"
      />


      <Text style={styles.titleText}>
            {'\n'}{'\n'}{'\t'}Results: {total && <Text>{total}</Text>}
      </Text>
      {console.log(total !== NaN)}    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C8A2C8",
    flex: 1
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;