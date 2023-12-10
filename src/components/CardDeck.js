import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';
import CardCarousel from './CardCarousel';

const CardView = ({cardData, activeIndex, onSnapToItem}) => {
  const {entries, activeSlide} = this.state || {
    entries: [1, 2, 3],
    activeSlide: 2,
  };

  return (
    <View style={styles.container}>
      <CardCarousel />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotS
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationInactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default CardView;
