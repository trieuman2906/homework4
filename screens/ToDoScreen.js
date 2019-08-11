import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { TODOS } from "../constants/data";
import TodoItem from "./TodoItem";

export default class ToDoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: TODOS,
      inputText: ""
    };
  }

  onChange = text => {
    this.setState({
      inputText: text
    });
  };
  onSubmit = () => {
    const { todolist } = this.state;
    const newtodo = {
      body: this.state.inputText,
      status: "Active",
      id: todolist.length + 1
    };
    const newToDoList = [...todolist, newtodo];
    this.setState({
      todolist: newToDoList,
      inputText: ""
    });
  };
  OnlongpressItem = todo => {
    Alert.alert(
      "Delete your todo?",
      todo.body,
      [
        ({
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.onDeleteTodo(todo.id) })
      ],
      { cancelable: true }
    );
  };
  onDeleteTodo = id => {
    const { todolist } = this.state;
    const newTodoList = todolist.filter(todo => todo.id !== id);
    this.setState({
      todolist: newTodoList
    });
  };
  OnpresstodoItem = id => {
    const { todolist } = this.state;
    const todo = todolist.find(todo => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const FoundIndex = todolist.findIndex(todo => todo.id === id);
    todolist[FoundIndex] = todo;
    const newtodolist = [...todolist];
    this.setState(
      {
        todolist: newtodolist
      },
      () => {
        setTimeout(() => {
          this.props.navigation.navigate("Detailtodo", {
            data: todo
          });
        }, 1000);
      }
    );
  };
  render() {
    const { todolist, inputText } = this.state;
    return (
      <ImageBackground
        style={{
          flex: 1
        }}
        source={require("../assets/images/1.jpg")}
      >
        <KeyboardAvoidingView
          enabled
          behavior="padding"
          style={styles.todoItem}
        >
          <ScrollView contentContainer Style={{ flex: 1, paddingTop: 1000 }}>
            {todolist.map(item => {
              return (
                <TodoItem
                  data={item}
                  onpressbtt={() => this.OnpresstodoItem(item.id)}
                  Onlongpress={() => this.OnlongpressItem(item)}
                />
              );
            })}
            <TextInput
              style={styles.input}
              onChangeText={this.onChange}
              value={inputText}
            />

            <TouchableOpacity style={styles.btt} onPress={this.onSubmit}>
              <Text>submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
ToDoScreen.navigationOptions = {
  title: " todo list"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
    alignItems: "center"
  },
  todoItem: {
    backgroundColor: "rgba(130,130,130,.1)",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    color: "white",
    borderRadius: 5
  },

  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 15,
    borderColor: "gray",
    borderRadius: 15
  },
  btt: {
    height: 40,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "blue",
    justifyContent: "center",
    marginTop: 15
  }
});
