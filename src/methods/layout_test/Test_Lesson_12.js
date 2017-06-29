import chai, {expect} from 'chai'
chai.use(require('chai-dom'))

const testLesson12 = () => {
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
    expect(head.querySelector('style')).to.contain.text('min-width: 600px')
  }
  catch (e) {
    return message = `Delare a media query and target screen with min-width: 600px`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('.aside')
    expect(head.querySelector('style')).to.contain.text('.article')
  }
  catch(e) {
    return message = `Remember to delcare a class for aside and article inside the media query`
  }
  try {
    expect(head.querySelector('style')).to.contain.text('flex-grow: 1')
    expect(head.querySelector('style')).to.contain.text('flex-basis: auto')
  }
  catch (e) {
    return message = `Don't forget to assing to the two new classes the properties of flex-grow: 1 and flex-basis: auto`
  }
  return message
}

export default testLesson12
