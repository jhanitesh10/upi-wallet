// CardDeck.js
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import SwipeCard from './SwipeCard';

const CardDeck = ({data, onSwipeLeft, onSwipeRight}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(data);

  const handleYup = () => {
    // Handle right swipe
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    onSwipeRight();
  };

  const handleNope = () => {
    // Handle left swipe
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    onSwipeLeft();
  };

  useEffect(() => {
    // Create a new array with cards in the desired order
    const reorderedCards = [
      ...data.slice(currentIndex),
      ...data.slice(0, currentIndex),
    ];
    setCards(reorderedCards);
  }, [currentIndex, data]);

  return (
    <View style={styles.cardDeckContainer}>
      <SwipeCards
        cards={cards}
        renderCard={cardData => <SwipeCard item={cardData} />}
        handleYup={handleYup}
        handleNope={handleNope}
        stack={false} // Disable stacking effect
        loop={false} // Disable loop effect
        stackOffsetX={0} // Adjust as needed
        stackOffsetY={0} // Adjust as needed
        cardRemoved={() => {
          // Handle card removal (end of the card stack)
        }}
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
