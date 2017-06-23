import testLesson1 from './header_test/Test_Lesson_1'
import testLesson2 from './header_test/Test_Lesson_2'
import testLesson3 from './header_test/Test_Lesson_3'
import testLesson5 from './header_test/Test_Lesson_5'
import testLesson7 from './header_test/Test_Lesson_7'

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
    case 2:
      message = testLesson2()
    break;
    case 3:
      message = testLesson3()
    break;
    case 4:
     message = 'Are you confortable with the CSS so far?'
     break;
    case 5:
      message = testLesson5()
      break;
    case 6:
      message = 'Have you tried to resize the screen to see how "justify-content" works?'
      break;
    case 7:
     message = testLesson7()
     break;
    default:
      message ='something went wrong'
  }

  return message
}


export default testCode
