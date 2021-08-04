import React from "react"
import "./App.css"
import List from "./List"
import Input from "./Input.jsx"
class App extends React.Component {
  state = {
    tasks: ["make coffee", "make notes", "go for a jog", "new task"],
    currInput: "",
  };
  deleteFunction = (singleTask) => {
    let currentTaskArr = this.state.tasks;
    let newT = currentTaskArr.filter((element) => {
      return element !== singleTask;

    });
    this.setState({
      tasks: newT
    });
  }
  handleCurrentInput=(value)=>{
    this.setState({ currInput: value });
  }
  handleTasks=()=>{
    this.setState({
      tasks: [this.state.currInput,...this.state.tasks ],
      currInput: "",
    });
  }
  render = () => {
    return (
      <div>
        <Input cVal={this.state.currInput} handleCurrentInput={this.handleCurrentInput}  handleTasks={this.handleTasks}/>

        <List tasks={this.state.tasks} deleteTask={this.deleteFunction} />
      </div>
    );
  };
}

export default App;

//List ->child of parent
// parent can share data with child with help of props
// props os similar to attributes in html tags which can be used to send data or functions as well
// Child cannot send data to parent so we use functions , when we send a function as prop and when child executes the function it will be able to access the parent .
