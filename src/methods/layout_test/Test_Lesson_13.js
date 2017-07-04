import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson13 = () => {
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
    expect(head.querySelector('style')).to.contain.text('.footer')
  }
  catch (err) {
    return message = `Make sure to keep the original elements and add code from there`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('@media')
    expect(head.querySelector('style')).to.contain.text('min-width: 1000px')
  }
  catch (e) {
    return message = `Declare a media query and target screen with min-width: 1000px`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex: 3 0 0')
  }
  catch (e) {
    return message = `Remember to give section the property flex: 3 0 0`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('order: 1')
  }
  catch (e) {
    return message = `Remember to add order: 1 to .aside`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('order: 2')
  }
  catch (e) {
    return message = `Remember to add order: 2 to .section`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('order: 3')
  }
  catch (e) {
    return message = `Remember to add order: 3 to .article`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('order: 4')
  }
  catch (e) {
    return message = `Remember to add order: 4 to .footer`
  }
  return message
}

export default testLesson13
