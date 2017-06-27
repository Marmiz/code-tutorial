import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson9 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  let head = content.getElementsByTagName('head')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'

  // actual test
  try {
    expect(head.querySelector('style')).to.contain.text('.auto')
    expect(head.querySelector('style')).to.contain.text('.oneThird')
    expect(head.querySelector('style')).to.contain.text('.half')
    expect(head.querySelector('style')).to.contain.text('.twoThird')
  }
  catch (err) {
    return message = `Make sure that your stylesheet has 'auto', 'oneThird', 'half', and 'twoThird' classes defined`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-grow: 1')
  }
  catch (err) {
    return message = `your 'auto' class should have 'flex-grow' set to 1`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('width: 33.33%')
  }
  catch (err) {
    return message = `'oneThird' should have '33.33%' width set`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('width: 50%')
  }
  catch (err) {
    return message = `'half' should have '50%' width`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('width: 66.66%')
  }
  catch (err) {
    return message = `'twoThird' should be '66.66%' wide, two third`
  }
  return message
}

export default testLesson9
