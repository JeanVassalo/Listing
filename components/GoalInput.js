import React,{useState} from 'react';
import { View, StyleSheet,Button,TextInput } from 'react-native';

const GoalInput=props=>{
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }
    return(
        <View style={styles.inputContainer}>
        <TextInput placeholder="type" style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />

        <Button title="Add" onPress={props.onAddGoal.bind(this,enteredGoal)} />

      </View>
    )
}

const styles=StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderBottomWidth: 0.5,
        padding: 10
      }
      
})
export default GoalInput