// SwipeCard.js
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';

const SwipeCard = ({item}) => {
  return (
    <Card>
      <Image source={{uri: item.image}} style={{height: 300}} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </Card>
  );
};

export default SwipeCard;
