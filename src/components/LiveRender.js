import React, {Component} from 'react'

class LiveRender extends Component {
  componentDidMount(){
    this.updateRender()
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateRender()
  }

  // avoid unwanted link behaviour in the iframe
  parseHtml(code){
  let newcode = code.replace(/(<a )/g, '<a onclick="return false"')
  return newcode
  }

  updateContent(){
    const iframe = this.refs.iframe
    const x = iframe.contentDocument
    x.body.innerHTML = this.parseHtml(this.props.htmlCode)
  }

  updateStyle(){
    let code = this.props.cssCode.replace(/^/, '<style>').concat('</style>')
    const iframe = this.refs.iframe
    const x = iframe.contentDocument
    x.head.innerHTML = code
  }

  // debounce the re-rendering function
  updateRender = debounce(()=> {
    this.updateContent()
    this.updateStyle()
  },1000)

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
            id="if"
          />
        </div>
    )
  }
}


// http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export default LiveRender
