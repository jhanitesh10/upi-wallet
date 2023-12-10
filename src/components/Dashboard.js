import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuBar from './MenuBar';
import CardDeck from './CardDeck';
import AddButton from './AddButton';
import AddForm from './AddForm';

const Stack = createStackNavigator();

const Dashboard = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddForm" component={AddForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  const [isAddFormVisible, setAddFormVisible] = useState(false);

  const openAddForm = () => {
    setAddFormVisible(true);
  };

  const closeAddForm = () => {
    setAddFormVisible(false);
  };

  return (
    <View style={styles.container}>
      <MenuBar onPress={openAddForm} />
      <CardDeck />
      <AddButton onPress={openAddForm} />
      {isAddFormVisible && <AddForm onClose={closeAddForm} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Dashboard;
