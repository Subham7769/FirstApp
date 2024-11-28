import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatListDemo = () => {
  const data = [
    {name: 'John Doe', email: 'john.doe@example.com'},
    {name: 'Jane Smith', email: 'jane.smith@example.com'},
    {name: 'Robert Brown', email: 'robert.brown@example.com'},
    {name: 'Emily Davis', email: 'emily.davis@example.com'},
    {name: 'Michael Wilson', email: 'michael.wilson@example.com'},
    {name: 'Sarah Johnson', email: 'sarah.johnson@example.com'},
    {name: 'David Lee', email: 'david.lee@example.com'},
    {name: 'Anna Taylor', email: 'anna.taylor@example.com'},
    {name: 'James Anderson', email: 'james.anderson@example.com'},
    {name: 'Sophia Martinez', email: 'sophia.martinez@example.com'},
    {name: 'John Doe', email: 'john.doe@example.com'},
    {name: 'Jane Smith', email: 'jane.smith@example.com'},
    {name: 'Robert Brown', email: 'robert.brown@example.com'},
    {name: 'Emily Davis', email: 'emily.davis@example.com'},
    {name: 'Michael Wilson', email: 'michael.wilson@example.com'},
    {name: 'Sarah Johnson', email: 'sarah.johnson@example.com'},
    {name: 'David Lee', email: 'david.lee@example.com'},
    {name: 'Anna Taylor', email: 'anna.taylor@example.com'},
    {name: 'James Anderson', email: 'james.anderson@example.com'},
    {name: 'Sophia Martinez', email: 'sophia.martinez@example.com'},
  ];

  return (
    <ScrollView>
      <View style={styles.box}>
        <Text>FlatList</Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.entry}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      {/* <View style={styles.box}>
        <ScrollView>
          <Text>ScrollView</Text>
          {data.map((item, index) => (
            <View key={index + item.name} style={styles.entry}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */}
    </ScrollView>
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  entry: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },
});
