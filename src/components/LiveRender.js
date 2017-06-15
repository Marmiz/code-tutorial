import React, {Component} from 'react'

class LiveRender extends Component {
  componentDidMount(){
    this.updateContent()
    this.updateStyle()
  }

  componentWillReceiveProps(nextProps){
    this.updateContent()
    this.updateStyle()
  }

  updateContent(){
    const iframe = this.refs.iframe
    const x = iframe.contentDocument
    x.body.innerHTML = this.props.htmlCode
  }

  updateStyle(){
    let code = this.props.cssCode.replace(/^/, '<style>').concat('</style>')
    const iframe = this.refs.iframe
    const x = iframe.contentDocument
    x.head.innerHTML = code
  }

  render(){
    const ifStyle = {
      width: '100%',
      height: 'auto'
    }
    return (
        <div>
          <iframe
            title="ifRender"
            style={ifStyle}
            ref="iframe"
          />
        </div>
    )
  }
}

export default LiveRender
