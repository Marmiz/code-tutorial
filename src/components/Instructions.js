import React, {Component} from 'react'
import Remarkable from 'remarkable'
import '../styles/Instructions.css'
import ControlPanel from './ControlPanel'

class Instructions extends Component {
    getRawMarkup() {
      var md = new Remarkable()
      return { __html: md.render(this.props.description) };
    }
    render () {
      return (
        <div className="Instructions_wrapper">
          <div className="Instructions_div">
            <h2 className="Instructions_title">{this.props.title}</h2>
            <p className="Instructions_description" dangerouslySetInnerHTML={this.getRawMarkup()}></p>
          </div>
          <div className="ControlPanel_div">
            <ControlPanel {...this.props} />
          </div>
        </div>
      )
    }
}


export default Instructions
