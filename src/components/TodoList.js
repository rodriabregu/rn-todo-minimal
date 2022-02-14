import React from "react";
import { FlatList } from "react-native";
import CardItem from "./CardItem";

export default function TodoList({ todosData }) {
  return (
    <FlatList
      data={todosData}
      keyExtractor={i => i.id.toString()}
      renderItem={({ item }) => <CardItem {...item} />}
    />
  )
}
