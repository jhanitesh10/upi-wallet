import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import AddCardModal from './AddCardModal';

const HomeScreen = () => {
  const initialCards = [
    {
      id: 1,
      imageSource: 'https://picsum.photos/200/300/?blur', // Replace with your S3 image URL
      name: 'Card 1',
      description: 'Description 1',
    },
    {
      id: 2,
      imageSource: 'https://picsum.photos/id/870/200/300?grayscale&blur=2', // Replace with your S3 image URL
      name: 'Card 2',
      description: 'Description 2',
    },
    // Add more dummy cards here
  ];

  const [cards, setCards] = useState(initialCards);
  const [addCardModalVisible, setAddCardModalVisible] = useState(false);

  const handleSwipeLeft = () => {
    // Handle swipe left action
  };

  const handleSwipeRight = () => {
    // Handle swipe right action
  };

  const handleAddCard = newCard => {
    setCards([...cards, {id: cards.length + 1, ...newCard}]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cards.map(card => (
          <Card
            key={card.id}
            imageSource={card.imageSource}
            name={card.name}
            description={card.description}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setAddCardModalVisible(true)}>
        <Text>Add Card</Text>
      </TouchableOpacity>
      <AddCardModal
        visible={addCardModalVisible}
        onClose={() => setAddCardModalVisible(false)}
        onAddCard={handleAddCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  cardContainer: {
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default HomeScreen;
