// Dashboard.js
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import CardDeck from './CardDeck';
import AddImageForm from './AddImageForm';

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
      name: 'Phone pay',
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
      <View style={styles.cardDeckContainer}>
        <CardDeck
          data={data}
          onSwipeLeft={() => {} /* Handle swipe left */}
          onSwipeRight={() => {} /* Handle swipe right */}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Swipe Left" onPress={() => {} /* Handle swipe left */} />
        <Button
          title="Swipe Right"
          onPress={() => {} /* Handle swipe right */}
        />
      </View>
      <AddImageForm onAddImage={handleAddImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardDeckContainer: {
    flex: 1,
    width: '100%', // Set the width to 100% to take up the full screen width
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default Dashboard;
