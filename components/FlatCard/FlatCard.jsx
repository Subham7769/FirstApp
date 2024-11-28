import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Pink</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
},
container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  card: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#FFB38E',
  },
  cardTwo: {
    backgroundColor: 'pink',
  },
  cardThree: {
    backgroundColor: 'skyblue',
  },
});
