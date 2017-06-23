import React, {Component} from 'react'
import testCode from '../methods/test-code'
import '../styles/ControlPanel.css'

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
    // TODO: edit this when adding new challenges - they are based 0 so lesson1 is 0
    const lastLesson = 10
    return (
      <div className="ControlPanel_wrapper">
        <div className="NavigationButton_wrapper">
          {this.props.lesson > 0 &&
            <button className="Button Navigation_btn" onClick={ () => this.props.decrementLesson()}>
              Previous Lesson
            </button>
          }
          {this.props.lesson < lastLesson &&
            <button className="Button Navigation_btn" onClick={ () => this.props.incrementLesson()}>
              Next Lesson
            </button>
          }
        </div>
        <div className="TestButton_wrapper">
          <button className="Button Test_btn" onClick={() => this.runTest(this.props.id)}>Test Code</button>
          <div className="Message_Wrapper">
            {
              this.state.message &&
              <p className="TestResult_Message">{this.state.message}</p>
            }
          </div>
        </div>
    </div>
    )
  }
}

export default ControlPanel
