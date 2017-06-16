import React, {Component} from 'react'
import testCode from '../methods/test-code'

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = { message: null}
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.id !== nextProps.id) {
      this.setState({ message: null })
    }
  }
  runTest(id) {
    let result = testCode(id)
    this.setState({message: result})
  }
  render() {
    return (
      <div>
      <h4>Control Panel</h4>
      <button onClick={ () => this.props.incrementLesson()}>+</button>
      {this.props.lesson > 0 &&
        <button onClick={ () => this.props.decrementLesson()}>-</button>
      }
      <button onClick={() => this.runTest(this.props.id)}>Test Code</button>
      {
        this.state.message &&
        <p>{this.state.message}</p>
      }
    </div>
    )
  }
}

export default ControlPanel
