import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const MenuBar = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>☰</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default MenuBar;
