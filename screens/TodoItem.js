import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import ToDoSreen from "./ToDoScreen";
export default class TodoItem extends Component {
  render() {
    const {
      data: { body, id, status },
      onpressbtt,
      Onlongpress
    } = this.props;
    const bttstyle = status === "Active" ? styles.bttActive : styles.bttnormal;

    return (
      <TouchableOpacity
        style={bttstyle}
        onPress={onpressbtt}
        onLongPress={Onlongpress}
      >
        <Text style={styles.text}>
          {id}.{body}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  bttActive: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  bttnormal: {
    backgroundColor: "blue",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});
