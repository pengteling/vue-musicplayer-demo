export const evil = (fn) => {
  var Fn = Function
  return new Fn('return ' + fn)()
}
