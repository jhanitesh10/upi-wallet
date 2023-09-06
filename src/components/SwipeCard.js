// SwipeCard.js
import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {Card} from 'react-native-elements';

const SwipeCard = ({item}) => {
  const windowDimensions = useWindowDimensions();

  const cardContainerStyles = {
    width: windowDimensions.width,
    height: windowDimensions.height,
  };

  return (
    <View style={styles.cardWrapper}>
      <Card containerStyle={[styles.cardContainer, cardContainerStyles]}>
        <Image source={{uri: item.image}} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: 10,
  },
  cardContainer: {
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: 'black', // Shadow for iOS
    shadowOffset: {width: 0, height: 2}, // Shadow for iOS
    shadowOpacity: 0.2, // Shadow for iOS
    shadowRadius: 3, // Shadow for iOS
  },
  cardImage: {
    width: '100%',
    aspectRatio: 16 / 9, // Adjust this aspect ratio as needed
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
    backgroundColor: 'white',
  },
  cardTitle: {
    fontWeight: 'bold', // Make the title bold
    fontSize: 16, // Adjust the font size as needed
  },
  cardDescription: {
    fontSize: 14, // Adjust the font size as needed
    color: '#888', // Make the description lighter
  },
});

export default SwipeCard;
