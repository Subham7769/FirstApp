import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const Contacts = [
    {
      uid: '1',
      name: 'Aarav Sharma',
      status: 'Software Engineer',
      imageUrl: 'https://i.pravatar.cc/150?img=1'
    },
    {
      uid: '2',
      name: 'Isha Gupta',
      status: 'Doctor',
      imageUrl: 'https://i.pravatar.cc/150?img=2'
    },
    {
      uid: '3',
      name: 'Rohan Patel',
      status: 'Teacher',
      imageUrl: 'https://i.pravatar.cc/150?img=3'
    },
    {
      uid: '4',
      name: 'Priya Singh',
      status: 'Designer',
      imageUrl: 'https://i.pravatar.cc/150?img=4'
    },
    {
      uid: '5',
      name: 'Vikram Yadav',
      status: 'Civil Engineer',
      imageUrl: 'https://i.pravatar.cc/150?img=5'
    },
    {
      uid: '6',
      name: 'Neha Sharma',
      status: 'Business Analyst',
      imageUrl: 'https://i.pravatar.cc/150?img=6'
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {Contacts.map(({uid, name, status, imageUrl}) => (
          <View style={styles.userCard} key={uid}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
},
userName: {
    fontWeight: 'semibold',
    fontSize: 18,
},
userStatus:{
    fontSize: 12,
  },
  container: {
    padding: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    gap:10,
  },
  userCard: {
    marginBottom:4,
    borderRadius: 5,
    width: 350,
    height: 70,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#C5D3E8',
    marginHorizontal: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
});
