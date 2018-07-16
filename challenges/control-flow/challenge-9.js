/**
 * Eightball messages:
 * 0 - 'It is certain'
 * 1 - 'It is decidedly so'
 * 2 - 'Reply hazy try again'
 * 3 - 'Cannot predict now'
 * 4 - 'Dont count on it'
 * 5 - 'My sources say no'
 * 6 - 'Outlook not so good'
 * 7 - 'Signs point to yes'
 */

export default (name, number) => {
let message;
  switch(number){
    case 0 :
      message = 'It is certain';
      break;
    case 1 :
      message = 'It is decidedly so';
      break;
    case 2 :
      message = 'Reply hazy try again';
      break;
    case 3 :
      message = 'Cannot predict now';
      break;
    case 4 :
      message = 'Dont count on it';
      break;
    case 5 :
      message = 'My sources say no';
      break;
    case 6 :
      message = 'Outlook not so good';
      break;
    case 7 :
      message = 'Signs point to yes';
      break;
    default :
      message = 'Dunno';
  }
  return (`Hello, ${name}, the eightball says: ${message}`);
}
