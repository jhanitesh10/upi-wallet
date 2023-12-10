import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const AddButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default AddButton;
