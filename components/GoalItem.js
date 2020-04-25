import React,{useState} from 'react';
import {View,Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return (

        <View style={styles.listItems}>
            <Text >
                {props.title}
            </Text>
        </View>

    )
}

const styles=StyleSheet.create({
  listItems: {
    padding: 10,
    margin: 3,
    backgroundColor: '#ccc',
  }
})
// import { Container } from './styles';

export default GoalItem