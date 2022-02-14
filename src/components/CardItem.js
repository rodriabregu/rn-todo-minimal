import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from './CheckBox'

const CardItem = ({ id, text, isCompleted, isToday, hour }) => {
  return (
    <View style={styles.container}>
      <CheckBox id={id} text={text} isCompleted={isCompleted} isToday={isToday} hour={hour} />
      <View>
        <Text style={isCompleted ? [styles.text, {textDecorationLine: 'line-through', color: '#73737330'}] : styles.text }>{text}</Text>
        <Text style={isCompleted ? [styles.time, {textDecorationLine: 'line-through', color: '#73737330'}] : styles.time }>{hour}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#737373',
  },
  time: {
    fontSize: 14,
    color: '#A3A3A3',
    fontWeight: '500',
  },
})

export default CardItem