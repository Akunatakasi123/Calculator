const MathUtils = {
    add: (a, b) => parseFloat(a) + parseFloat(b),
    subtract: (a, b) => parseFloat(a) - parseFloat(b),
    multiply: (a, b) => parseFloat(a) * parseFloat(b),
    divide: (a, b) => parseFloat(a) / parseFloat(b),
    modulus: (a, b) => parseFloat(a) % parseFloat(b),
    equals: (expression) => eval(expression),
  };
  
  export default MathUtils;
  