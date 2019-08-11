import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DetailTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const todoItem = navigation.getParam("data");
    console.log(todoItem);
    const { status, body } = todoItem;
    return (
      <View style={styles.container}>
        <View style={styles.hover}>
          <Text style={styles.text}>status: {status} </Text>
          <Text style={styles.text}>body: {body} </Text>
        </View>
      </View>
    );
  }
}
DetailTodo.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  hover: {
    width: 300,
    height: 200,
    borderRadius: 30,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(47,163,218,.1)"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
