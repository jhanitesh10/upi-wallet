// Dashboard.js
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import CardDeck from './CardDeck';

const Dashboard = () => {
  const initialData = [
    {
      name: 'Google UPI',
      description: 'Description 1',
      image: 'https://picsum.photos/200/300/?blur',
    },
    {
      name: 'Phone pay',
      description: 'Description 2',
      image: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
    },
    {
      name: 'Paytm',
      description: 'Description 2',
      image: 'https://picsum.photos/v2/list?page=2&limit=100',
    },
  ];
  const [data, setData] = useState(initialData);

  const handleAddImage = newImage => {
    setData([...data, newImage]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardDeckContainer}>
        <CardDeck
          data={data}
          onSwipeLeft={() => {} /* Handle swipe left */}
          onSwipeRight={() => {} /* Handle swipe right */}
        />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          {/* You can place an icon or any content here */}
          {/* Example icon: */}
          {/* <Icon name="heart" size={24} color="red" /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          {/* You can place an icon or any content here */}
          {/* Example icon: */}
          {/* <Icon name="close" size={24} color="red" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BUTTON_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardDeckContainer: {
    flex: 1,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2, // Make it circular
    backgroundColor: 'blue', // Example background color
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
