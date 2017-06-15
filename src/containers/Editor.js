import React, {Component} from 'react'
import LiveRender from '../components/LiveRender'
import '../styles/Editor.css'

// import CodeMirror stuff
import CodeMirror from 'react-codemirror'
import  'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'


class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      htmlCode: '<!-- html -->\n<h1 class="myClass">The result</h1>',
      cssCode: '/* css */\n.myClass {\n text-align: center;\n}'
    }
  }

  componentWillMount() {
    this.updateCssCode(this.state.cssCode)
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
    const optionsHtml = {
      lineNumbers: true,
      theme: 'material',
      mode: 'htmlmixed'
    }
    const optionsCss = {
      lineNumbers: true,
      theme: 'solarized',
      mode: 'css'
    }
    return (
      <div className="editorContainer">
        <div className="htmlEditor">
          <CodeMirror value={this.state.htmlCode} onChange={this.updateHtmlCode} options={optionsHtml} />
        </div>
        <div className="cssEditor">
          <CodeMirror value={this.state.cssCode} onChange={this.updateCssCode}
            options={optionsCss} />
        </div>
        <div className="ifRender">
          <LiveRender {...this.state} />
        </div>
     </div>
    );
  }
}

export default Editor;
