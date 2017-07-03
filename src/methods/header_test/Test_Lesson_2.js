import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson2 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  // let head = content.getElementsByTagName('head')[0].innerHTML
  let body = content.getElementsByTagName('body')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'
  // actual test
  try {
    // eslint-disable-next-line
    expect(body.querySelector('#parent')).to.exist
  }
  catch (err) {
    return message = `You should have a div with id of 'parent'`
  }
  try {
    expect(body.querySelectorAll('div')).to.have.length(4)
  }
  catch (err) {
    return message = `Your should have a parent div and a total of 3 div inside`
  }
  return message
}

export default testLesson2
