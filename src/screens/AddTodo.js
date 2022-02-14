import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Switch, TextInput } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTodo = () => {
  const [name, setName] = React.useState('')
  const [date, setDate] = React.useState(new Date())
  const [isToday, setIsToday] = React.useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add task</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="Task name"
          placeholderTextColor={'#00000030'}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        <DateTimePicker 
          value={date}
          mode={'time'}
          is24Hour={true}
          onChange={selectedDate => setDate(selectedDate)}
          style={{width: '80%'}}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        <Switch 
          value={isToday}
          onValueChange={value => setIsToday(value)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Done</Text>
      </TouchableOpacity>
      <Text style={{color: '#00000065'}}>If you disable today, the task will be considered to tomorrow.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 4,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: '#00000030',
    borderBottomWidth: 1,
    width: '80%',
  },
  inputContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 46,
    borderRadius: 11,
  }
})

export default AddTodo