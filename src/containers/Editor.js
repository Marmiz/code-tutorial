import React, {Component} from 'react'
import LiveRender from '../components/LiveRender'
import '../styles/Editor.css'


// Ace editor stuff
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';



class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      htmlCode: this.props.seedHtml,
      cssCode: this.props.seedCss
    }
  }

  componentWillMount() {
    this.updateCssCode(this.state.cssCode)
    this.updateHtmlCode(this.state.htmlCode)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.seedHtml !== this.state.htmlCode) {
      this.updateHtmlCode(nextProps.seedHtml)
    }
    if(nextProps.seedCss !== this.state.cssCode) {
      this.updateCssCode(nextProps.seedCss)
    }
  }

  updateHtmlCode = (newCode) => {
    this.setState({ htmlCode: newCode })
  }

  updateCssCode = (newCode) => {
    this.setState({cssCode: newCode})
  }

  liveRender() {
    return {__html: this.state.code}
  }

  render() {

    return (
      <div className="editorContainer">
        <div className="htmlEditor">
          <AceEditor editorProps={{$blockScrolling: Infinity}} value={this.state.htmlCode} onChange={this.updateHtmlCode} theme="monokai" mode="html" />
        </div>
        <div className="cssEditor">
          <AceEditor editorProps={{$blockScrolling: Infinity}} value={this.state.cssCode} onChange={this.updateCssCode}
            theme="tomorrow" mode="css" />
        </div>
        <div className="ifRender">
          <LiveRender {...this.state} />
        </div>
     </div>
    );
  }
}

export default Editor;
