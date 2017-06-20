import testLesson1 from './Test_Lesson_1'

// id = store.lessons
const testCode = (id) => {

  let message = ''

  switch(id) {
    case 0:
      message = 'Are you a master of Flexbox yet?'
    break;
    case 1:
      message = testLesson1()
    break;
    default:
      message ='something went wrong'
  }

  return message
}


export default testCode
