import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson7 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  let head = content.getElementsByTagName('head')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'

  // tests
  try {
    expect(head.querySelector('style')).to.contain.text('@media')
  }
  catch (e) {
    return message = 'Make sure to implement the media queries'
  }
  try {
    expect(head.querySelector('style')).to.contain.text('max-width: 800px')
  }
  catch (e) {
    return message = 'Make sure to have a  media query for "max-width: 800px" '
  }
  try {
    expect(head.querySelector('style')).to.contain.text('justify-content: space-around')
  }
  catch (e) {
    return message = 'Inside the 800px media query create a new entry for ".navbar" class  and set "justify-content: space-around"'
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-grow: 0')
  }
  catch (e) {
    return message = 'Inside the 800px media query create a new entry for ".grow" and set "flex-grow: 0"'
  }
  try {
    expect(head.querySelector('style')).to.contain.text('max-width: 600px')
  }
  catch (e) {
    return message = 'Make sure you created a second media query that target "max-width: 600px"'
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-direction: column')
  }
  catch (e) {
    return message = 'Inside the 600px media query create a new entry for ".navbar" and set "flex-direction: column"'
  }

  return message;
}

// catch (e) {
//   console.log(e)
//   return message = 'e'
// }

export default testLesson7
