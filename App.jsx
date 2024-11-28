import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatListDemo from './components/FlatListDemo/FlatListDemo';
import FlatCard from './components/FlatCard/FlatCard';
import ElevatedCard from './components/ElevatedCard/ElevatedCard';
import FancyCard from './components/FancyCard/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard/>
        <FancyCard/>
        {/* <FlatListDemo /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
