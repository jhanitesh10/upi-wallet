import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {useSharedValue} from 'react-native-reanimated';

const Card = ({imageSource, name, description, onSwipeLeft, onSwipeRight}) => {
  // const translateX = useSharedValue(0);

  // const onGestureEvent = Animated.event(
  //   [{nativeEvent: {translationX: translateX}}],
  //   {
  //     useNativeDriver: true,
  //   },
  // );

  return (
    <PanGestureHandler
      // onGestureEvent={onGestureEvent}
      onHandlerStateChange={({nativeEvent}) => {
        if (nativeEvent.translationX < -100) {
          onSwipeLeft();
        } else if (nativeEvent.translationX > 100) {
          onSwipeRight();
        }
      }}>
      <Animated.View
        style={[
          styles.cardContainer,
          // {transform: [{translateX: Animated.multiply(translateX, 0.75)}]},
        ]}>
        <Image source={{uri: imageSource}} style={styles.cardImage} />
        <Text style={styles.cardText}>{name}</Text>
        <Text style={styles.cardText}>{description}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Card;
