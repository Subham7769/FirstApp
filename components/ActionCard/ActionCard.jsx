import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = webSiteLink => {
    Linking.openURL(webSiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.container}>
        <View style={styles.cardElevated}>

          <Text style={styles.headerText}>What's new in JS 21 - ES12</Text>

          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/662e5f9f46ce2d2450186839_662b08cfab87818173b64466-ce8f6f9a59aad8a2ef2a04f3fb1d4f37.jpeg',
            }}
          />

          <View style={styles.cardBody}>

            <Text style={styles.cardDescription} numberOfLines={3}>
              A fortress built by the British Empire on the banks of the River
              Jodhpur.A fortress built by the British Empire on the banks of the
              River Jodhpur.
            </Text>

            <View style={styles.cardFooter}>
              <TouchableOpacity
                onPress={() => {
                  openWebsite(
                    'https://daily.dev/blog/javascript-latest-version-whats-new',
                  );
                }}
                style={styles.socialLink}
                >
                <Text>Read More</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  openWebsite(
                    'https://www.linkedin.com/in/shubhamjain7769/',
                  );
                }}
                style={styles.socialLink}
                >
                <Text >Follow Me</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  headerText:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
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
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
    paddingVertical: 10,
  },
  cardImage: {
    width: 350,
    height: 200,
    marginBottom: 10,
  },
  cardBody: {
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 5,
    flexShrink: 1,
  },
  cardFooter: {
    padding: 8,
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink:{
    backgroundColor:'white',
    padding: 5,
    paddingHorizontal:15,
    borderRadius: 5,
    borderBlockColor:'skyblue',
  }

});
