import React , { Component }from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

  const BUTTON_OPTIONS = {
    'toDo': {
      'color' : 'white',
      'background': 'rgb(255,0,0)',
      'text' : 'To do'
    },
    'inProgress': {
      'color' : 'white',
      'background': 'rgb(211,72,54)',
      'text' : 'In progress'
    },
    'needsReview': {
      'color' : 'white',
      'background': '#f91',
      'text' : 'Needs review'
    },
    'done' : {
      'color' : 'white',
      'background': 'green',
      'text' : 'Done'
    },
  }
class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      taskState: 'toDo',
      taskStateNoLoop: 'toDo'
    }
    this.changeTaskState = this.changeTaskState.bind(this)
    this.changeTaskStateNoLoop = this.changeTaskStateNoLoop.bind(this)
  }

  changeTaskState = (s) => {
    this.setState({ taskState: s })
  }

  changeTaskStateNoLoop = (s) => {
    this.setState({ taskStateNoLoop: s })
  }

  render(){
    return (
      <div className={'multistateButtonContainer'}>
        <section className={'headerSection section'}>
          <h1 className={'title'}>Demo with examples of the MultiStateButtonComponent</h1>
          <p>Application to change status. There are four statuses: 'To do', 'In progres', 'Needs review' and 'Done'.</p>
        </section>
        <section className={'examplesSection section'}>
          <div className={'examples'}>
            <h2>Example 1</h2>
            <p>Click the button to change your status in loop.</p>
            <MyComponent
            options={BUTTON_OPTIONS}
            defaultValue = {'toDo'}
            onChange={(s) => this.changeTaskState(s)}
            loop={true}
            />
            <p>Status: {BUTTON_OPTIONS[this.state.taskState].text}</p>
          </div>
          <div className={'examples'}>
            <h2>Example 2</h2>
            <p>Click the button to change your status without loop. Finish on status 'Done'.</p>
            <MyComponent
            options={BUTTON_OPTIONS}
            defaultValue = {'toDo'}
            onChange={(s) => this.changeTaskStateNoLoop(s)}
            />
            <p>Status: {BUTTON_OPTIONS[this.state.taskStateNoLoop].text}</p>
          </div>
        </section>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("app"));
