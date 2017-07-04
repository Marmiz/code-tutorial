import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson5 = () => {
  // select the iframe content
  let iframe = document.getElementById('if')
  let content = iframe.contentDocument || iframe.contentWindow.document
  let head = content.getElementsByTagName('head')[0]
  let body = content.getElementsByTagName('body')[0]

  // message to return --> success by default unless will be overwritten by an error
  let message = 'All tests passed'

  // tests
   try {
     // eslint-disable-next-line
    expect(body.querySelector('#parent')).to.exist
  }
  catch (e) {
    return message = `You should have a div with id of 'parent'`
  }
  try {
    expect(body.querySelectorAll('div')).to.have.length(5)
  }
  catch (e) {
    return message = `Your should have a parent div and a total of 4 div inside`
  }
  try {
    expect(body.querySelectorAll('a')).to.have.length(4)
  }
  catch (e) {
    return message = 'Make sure you have nested a new link inside the new div'
  }
  try{
    expect(body.querySelector('a')).to.have.text('Home')
  }
  catch (e) {
    return message = 'Make sure the text your link display is "Home" and that is in the top most div'
  }
  try {
    expect(body.querySelectorAll('div')[1]).to.have.class('grow')
  }
  catch (e) {
    return message = 'Give the new div the class `grow`'
  }
  try {
    expect(head.querySelector('style')).to.contain.text('.grow')
  }
  catch (e) {
    return message = 'Declare a new class called "grow" in the CSS file '
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-grow: 1;')
  }
  catch (e) {
    return message = '.grow should have flex-grow:1 declared inside'
  }

  return message;
}

export default testLesson5
