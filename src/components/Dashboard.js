// Dashboard.js
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import CardDeck from './CardDeck';
import AddImageForm from './AddImageForm';

const Dashboard = () => {
  // const initialData = [
  //   {
  //     name: 'Image 1',
  //     description: 'Description 1',
  //     image: require('../../assets/1.jpg'),
  //   },
  //   {
  //     name: 'Image 2',
  //     description: 'Description 2',
  //     image: require('../../assets/2.jpg'),
  //   },
  // ];

  const initialData = [
    {name: 'Image 1', description: 'Description 1', image: 'IMAGE_URL_1'},
    {name: 'Image 2', description: 'Description 2', image: 'IMAGE_URL_2'},
  ];
  const [data, setData] = useState(initialData);

  const handleAddImage = newImage => {
    setData([...data, newImage]);
  };

  return (
    <View style={styles.container}>
      <CardDeck
        data={data}
        onSwipeLeft={() => {} /* Handle swipe left */}
        onSwipeRight={() => {} /* Handle swipe right */}
      />
      <AddImageForm onAddImage={handleAddImage} />
      <View style={styles.buttonContainer}>
        <Button title="Swipe Left" onPress={() => {} /* Handle swipe left */} />
        <Button
          title="Swipe Right"
          onPress={() => {} /* Handle swipe right */}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default Dashboard;
