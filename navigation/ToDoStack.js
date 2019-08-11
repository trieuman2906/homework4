import React, { Component } from "react";
import { View, Text } from "react-native";
import ToDoScreen from "../screens/ToDoScreen";
import TabBarIcon from "../components/TabBarIcon";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Platform } from "react-native";
import DetailTodo from "../screens/DetailTodo";

const TodoStack = createStackNavigator({
  Todo: ToDoScreen,
  Detailtodo: DetailTodo
});

TodoStack.navigationOptions = {
  tabBarLabel: "ToDo",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "ios-list"
      }
    />
  )
};
TodoStack.path = "";
export default TodoStack;
