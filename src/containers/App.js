import React, { Component } from 'react';
import '../styles/App.css';
import Editor from './Editor'
import Data from '../lessons/LessonWrapper'
import Instructions from '../components/Instructions'

import { connect } from 'react-redux'
import { incrementLesson, decrementLesson} from '../actions/lesson-actions'

class App extends Component {

  mapProps() {
      return Data[this.props.lesson]
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Default Html-Css editor with live render</h2>
        </div>
        <div className="App-instructions">
          <Instructions {...this.mapProps()} {...this.props} />
        </div>
        <div>
          <Editor {...this.mapProps()}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  lesson: state.lesson
});

const mapDispatchToProps = {
  incrementLesson,
  decrementLesson
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
