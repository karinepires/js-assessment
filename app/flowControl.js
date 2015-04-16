if (typeof define !== 'function') { var define = require('amdefine')(module); }


define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number

      var func = function (num){
        console.log('test');
        console.log(num);
        var isNumber = typeof num !== undefined  && !isNaN(parseFloat(num)) && isFinite(num);

        if ( !isNumber ) return false;

        var isMultiple3 = (num % 3) === 0;
        var isMultiple5 = (num % 5) === 0;

        if (isMultiple3 && isMultiple5) return 'fizzbuzz';
        if (isMultiple3) return 'fizz';
        if (isMultiple5) return 'buzz';
        return num;
      };
      return func(num);

    }
  };
});
