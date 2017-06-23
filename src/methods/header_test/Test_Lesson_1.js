import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson1 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  // let head = content.getElementsByTagName('head')[0].innerHTML
  let body = content.getElementsByTagName('body')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'

  // actual test
  try {
    expect(body.querySelector('h1')).to.have.class('myClass')
  }
  catch (err) {
    return message = `Your html should have an h1 with class 'myClass'`
  }
  return message
}

export default testLesson1
