import React, { Component } from "react"
import "./style.css"

class MultiStateButtonComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentState: this.props.defaultValue
    }
  }

  handleClick = () => {
    var keys = Object.keys(this.props.options)
    let currentIndex = keys.indexOf(this.state.currentState)
    let nextIndex = currentIndex
    if( currentIndex < keys.length - 1){
      nextIndex = currentIndex + 1
    } else {
      nextIndex = 0
    }
    this.setState({currentState: keys[nextIndex]})
    console.log('currentState', keys[nextIndex])
    this.props.onChange(keys[nextIndex])
   };

  render() {
    const { options } = this.props;
    return (
      <button
        onClick={this.handleClick}
        style={{ color: options[this.state.currentState].color, background: options[this.state.currentState].background}}
        className={`btn multiStateBtn multiStateBtn-${this.state.currentState}`}
        >
        {options[this.state.currentState].text}
      </button>
    );
  }
}

export default MultiStateButtonComponent;
