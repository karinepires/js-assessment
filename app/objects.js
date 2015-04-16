if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
        // console.log(constructor);
        // console.log(greeting);
        // // constructor = greeting;
        // return constructor(greeting);
    },

    iterate : function(obj) {
        // obj.prototype.iterate = function(){
        var properties = [];
        for(var propertyName in obj) {
            // properties.append(propertyName);
        }
        console.log(properties);
        return false;
        // };
        // return false;
    }
  };
});
