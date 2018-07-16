export default (fullName) => {
  let surname = fullName.split(' ');
  return surname[1].toUpperCase();
};
