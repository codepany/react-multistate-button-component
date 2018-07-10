import React , { Component }from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

  const BUTTON_OPTIONS = {
    'toDo': {
      'color' : 'red',
      'background': 'black',
      'text' : 'To do'
    },
    'inProgress': {
      'color' : 'blue',
      'background': 'white',
      'text' : 'In progress'
    },
    'needsReview': {
      'color' : 'yellow',
      'background': 'blue',
      'text' : 'Needs review'
    },
    'done' : {
      'color' : 'green',
      'background': 'gray',
      'text' : 'Done'
    },
  }
class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      taskState: 'inProgress'
    }
    this.changeTaskState = this.changeTaskState.bind(this)
  }

  changeTaskState = (s) => {
    console.log('task state changed', s)
    this.setState({ taskState: s })
  }

  render(){
    return (
      <div>
      <h1>Demo with examples of the component: {BUTTON_OPTIONS[this.state.taskState].text}</h1>

        <MyComponent
          options={BUTTON_OPTIONS}
          defaultValue = {'inProgress'}
          onChange={(s) => this.changeTaskState(s)}
        />

      </div>
    );
  }
}

render(<Demo />, document.getElementById("app"));
