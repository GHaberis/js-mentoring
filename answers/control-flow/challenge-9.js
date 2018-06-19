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

export default () => {
    let eightBall = '';

    switch (number) {
        case 0:
            eigthBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Dont count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
        default:
            eightBall = 'Dunno';
            break;
    }

    return `Hello, ${name}, the eightball says: ${eightBall}`
}