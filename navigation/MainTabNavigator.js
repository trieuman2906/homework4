import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import TodoStack from "../navigation/ToDoStack";
import ActiveScreen from "../screens/ActiveScreen";
import Complete from "../screens/Complete";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

TodoStack.path = "";
const LinksStack = createStackNavigator(
  {
    Links: ActiveScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Active",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: Complete
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Complete",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  TodoStack,
  LinksStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
