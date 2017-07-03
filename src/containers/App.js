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
          <a
            href="https://twitter.com/intent/tweet?screen_name=akailbiondo">
            <i className="fa fa-twitter"></i>@akailbiondo</a>
          <a href="https://github.com/Marmiz/code-tutorial/issues/new" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>Report a bug</a>
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
