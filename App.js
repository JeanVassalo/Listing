import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, 
      {key: Math.random().toString(),
      value:goalTitle
      }])

  }
  return (
    <View style={styles.screen}>
      
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => 
      <GoalItem title={itemData.item.value}/>} 
      />
    </View>

  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white'
  },

})
