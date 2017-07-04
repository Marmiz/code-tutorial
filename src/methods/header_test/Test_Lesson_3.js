import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson3 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  let head = content.getElementsByTagName('head')[0]
  let body = content.getElementsByTagName('body')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'
  // actual test
  try {
    expect(body.querySelector('#parent')).to.have.class('navbar')
  }
  catch (err) {
    return message = `Your parent div should have a navbar class`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('display: flex')
  }
  catch (err) {
    return message = `Make sure to set dsplay: flex in the .navbar class`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-direction: row')
  } catch (e) {
    return message = `.navbar should have flex-direction set to row`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('justify-content: flex-end')
  } catch (e) {
    return message = `.navbar should have justify-content as flex-end`
  }
  return message
}

export default testLesson3
