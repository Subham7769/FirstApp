import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.cardElevated}>
          <Icon
            name="bookmark"
            size={30}
            color="white"
            style={styles.bookMark}
          />
          <Icon name="heart" size={30} color="white" style={styles.heart} />
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://www.abhibus.com/blog/wp-content/uploads/2023/08/amer-Fort.jpg',
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Amer Fort</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>
              A fortress built by the British Empire on the banks of the River
              Jodhpur.
            </Text>
            <Text style={styles.cardFooter}>📍12 mins away</Text>
          </View>
        </View>
        <View style={styles.cardElevated}>
          <Icon
            name="bookmark"
            size={30}
            color="white"
            style={styles.bookMark}
          />
          <Icon name="heart" size={30} color="red" style={styles.heart} />
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1031572588_20200219165610_20200219165630.jpg',
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Jal Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>
              A fortress built by the British Empire on the banks of the River
              Jodhpur.
            </Text>
            <Text style={styles.cardFooter}>📍12 mins away</Text>
          </View>
        </View>
        <View style={styles.cardElevated}>
          <Icon
            name="bookmark"
            size={30}
            color="white"
            style={styles.bookMark}
          />
          <Icon name="heart" size={30} color="white" style={styles.heart} />
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://assets-news.housing.com/news/wp-content/uploads/2022/06/02101049/Top-10-places-to-visit-in-Jaipur-and-things-to-do.jpg',
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>
              A fortress built by the British Empire on the banks of the River
              Jodhpur.
            </Text>
            <Text style={styles.cardFooter}>📍12 mins away</Text>
          </View>
        </View>
        <View style={styles.cardElevated}>
          <Icon
            name="bookmark"
            size={30}
            color="white"
            style={styles.bookMark}
          />
          <Icon name="heart" size={30} color="red" style={styles.heart} />
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://www.abhibus.com/blog/wp-content/uploads/2023/08/Amber-Fort.jpg',
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>River Bank</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>
              A fortress built by the British Empire on the banks of the River
              Jodhpur.
            </Text>
            <Text style={styles.cardFooter}>📍12 mins away</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 10,
  },
  cardElevated: {
    borderRadius: 10,
    width: 350,
    height: 350,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    marginHorizontal: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
  },
  bookMark: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
  },
  heart: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 100,
  },
  cardImage: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  cardBody: {
    paddingHorizontal: 12,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 14,
    flexShrink: 1,
    color: 'gray',
  },
  cardFooter: {
    fontSize: 14,
  },
});
