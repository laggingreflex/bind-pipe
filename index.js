module.exports = pipe;

function pipe(fn) {
  return fn(this);
}
