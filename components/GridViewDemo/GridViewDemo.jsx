import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GridViewDemo = () => {
  return (
    <View style={
        {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor:"pink",
            padding:10,
            gap:10
        }
    }>
      <Text style={styles.name}>GridViewDemo</Text>
      <Text style={styles.name}>GridViewDemo</Text>
      <Text className={"text-red-500"}>GridViewDemo</Text>

    </View>
  )
}

export default GridViewDemo

const styles = StyleSheet.create({
    name:{
        padding:5,
        fontSize:18,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
    }
})