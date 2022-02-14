import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoList from '../components/TodoList';
import todosData from '../../data/todos';

const uri = 'https://i.pinimg.com/564x/31/da/ba/31daba77e7c5f7eb8faad05162ccc087.jpg';

export default function Home() {
  const navigation = useNavigation();
  const [localData, setLocalData] = React.useState(todosData.sort((a, b) => a.isCompleted - b.isCompleted));
  const [isHidden, setIsHidden] = React.useState(false);

  const toggleHidden = () => {
    if (isHidden) {
      setIsHidden(false)
      setLocalData(todosData.sort((a, b) => a.isCompleted - b.isCompleted))
      return
    }
    setIsHidden(!isHidden)
    setLocalData(localData.filter(e => !e.isCompleted))
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.pic} />

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={toggleHidden}>
          <Text style={{color: '#3478f6'}}>{isHidden ? 'Show completeds' : 'Hide completeds'}</Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData={localData.filter(e => e.isToday)} />

      <Text style={styles.title}>Tomorrow</Text>
      <TodoList todosData={localData.filter(e => !e.isToday)} />

      <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Add')} >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 4,
  },
  buttom: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 50,
    right: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: '#fff',
    position: 'absolute',
    top: -6,
    left: 9,
  }
})
