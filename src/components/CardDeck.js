// CardDeck.js
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import SwipeCard from './SwipeCard';

const CardDeck = ({data, onSwipeLeft, onSwipeRight}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleYup = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    onSwipeRight();
  };

  const handleNope = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    onSwipeLeft();
  };

  return (
    <View style={styles.cardDeckContainer}>
      <SwipeCards
        cards={data}
        renderCard={cardData => <SwipeCard item={cardData} />}
        handleYup={handleYup}
        handleNope={handleNope}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardDeckContainer: {
    flex: 1,
  },
});

export default CardDeck;
