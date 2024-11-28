import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
    <Text style={styles.headingText}>Elevated Card</Text>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.cardElevated}>
          <Text>Tap</Text>
        </View>
        <View style={styles.cardElevated}>
          <Text>me</Text>
        </View>
        <View style={styles.cardElevated}>
          <Text>to</Text>
        </View>
        <View style={styles.cardElevated}>
          <Text>Scroll</Text>
        </View>
        <View style={styles.cardElevated}>
          <Text>More... 😊</Text>
        </View>

    </ScrollView>
  </View>
  )
}

export default ElevatedCard

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
      padding: 10,
      borderRadius: 10,
      width: 100,
      height: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EEEEEE',
      marginHorizontal:10,
      shadowColor: 'indigo',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },

  });