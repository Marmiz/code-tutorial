import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson8 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  let head = content.getElementsByTagName('head')[0]
  let body = content.getElementsByTagName('body')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'

  // actual test
  try {
    expect(body.querySelector('div')).to.have.class('container')
  }
  catch (err) {
    return message = `Your first div should have the class 'container'`
  }
  try {
    expect(body.querySelectorAll('div')).to.have.length(4)
  }
  catch (err) {
    return message = `You should have exacly 3 div nested the 'container' div`
  }
  try {
    expect(body.querySelectorAll('div')[1]).to.have.class('content')
    expect(body.querySelectorAll('div')[2]).to.have.class('content')
    expect(body.querySelectorAll('div')[3]).to.have.class('content')
  }
  catch (err) {
    message = `Make sure to give all the 3 nested div the class 'content'`
  }
  try {
    expect(body.querySelectorAll('p')).to.have.length(3)
  }
  catch (err) {
    console.log(err)
    message = 'Make sure to nest one <p> element inside each "content" div'
  }
  try {
    expect(head.querySelector('style')).to.contain.text('display: flex')
  }
  catch (err) {
    console.log(err)
    return message = `Make sure to set dsplay: flex on the 'container' class`
  }
  return message
}

export default testLesson8
