import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson11 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  let head = content.getElementsByTagName('head')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'

  // actual test
  try {
    expect(head.querySelector('style')).to.contain.text('.wrapper')
    expect(head.querySelector('style')).to.contain.text('.header')
    expect(head.querySelector('style')).to.contain.text('.section')
    expect(head.querySelector('style')).to.contain.text('.nav')
    expect(head.querySelector('style')).to.contain.text('.aside')
    expect(head.querySelector('style')).to.contain.text('.footer')
    expect(head.querySelector('style')).to.contain.text('.article')
  }
  catch (err) {
    return message = `Make sure that your stylesheet has .wrapper .header .section .nav .aside .footer .article classes declared`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('display: flex')
  }
  catch (e) {
    return message = `Don't forget about the display: flex property for the .wrapper class`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-direction: row')
  }
  catch (e) {
    console.log(e)
    return message = `Remember to set the flex-direction to row in .wrapper`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-wrap: wrap')
  }
  catch (e) {
    return message = `Remember about flew-wrap: wrap for .wrapper`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-grow: 1')
    expect(head.querySelector('style')).to.contain.text('flex-basis: 100%')
  }
  catch(e) {
    return message = `Remember to give flex-grow and flex-basis values to all your elements`
  }

  return message
}

export default testLesson11
