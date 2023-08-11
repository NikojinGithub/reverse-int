module.exports = function reverse (n) {
  const res = n.toString().split('').reverse().join('');
  if (res.includes('-')){
    return +res.slice(0, -1);
  } else {
    return +res;
  }
}