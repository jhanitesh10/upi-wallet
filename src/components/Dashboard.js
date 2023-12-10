import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardDeck from './CardDeck';
import AddImageForm from './AddImageForm';

const Dashboard = () => {
  const cardData = [
    {id: 1, text: 'Card 1', image: require('../../assets/2.jpg')},
    {id: 2, text: 'Card 2', image: require('../../assets/1.jpg')},
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <CardDeck
        cardData={cardData}
        activeIndex={activeIndex}
        onSnapToItem={setActiveIndex}
      />
      {/* <AddImageForm /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
