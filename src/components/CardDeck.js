// CardDeck.js
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import SwipeCard from './SwipeCard';

const CardDeck = ({data, onSwipeLeft, onSwipeRight}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleYup = () => {
    setCurrentIndex(currentIndex + 1);
    onSwipeRight();
  };

  const handleNope = () => {
    setCurrentIndex(currentIndex + 1);
    onSwipeLeft();
  };

  return (
    <View>
      <SwipeCards
        cards={data.slice(currentIndex)}
        renderCard={cardData => <SwipeCard item={cardData} />}
        handleYup={handleYup}
        handleNope={handleNope}
      />
    </View>
  );
};

export default CardDeck;
