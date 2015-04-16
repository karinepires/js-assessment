if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        var result = fn.apply(fn,arr); // fn.call(arr);
        return result;
    },

    speak : function(fn, obj) {
        var result = fn.call(obj);
        return result;
    },

    functionFunction : function(str) {
        return function(str2){
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {

        function makeOneClosure(n){
            var num = n;
            var func = fn;
            function go(){
                return func(n);
            }
            return go;
        }

        return arr.map(makeOneClosure);
    },

    partial : function(fn, str1, str2) {
        // console.log(fn(str1,str2));
        // console.log(fn);
        // return fn(str1,str2);
        return fn.bind(undefined,str1,str2);
    },

    useArguments : function() {
        var sum = 0;
        for (var i = arguments.length - 1; i >= 0; i--) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments);
        // console.log(fn);
        // console.log(arguments);
        // console.log(arguments.length);
        // // console.log(arguments.slice(0,2));
        // console.log(arguments[2]);
        // console.log('here');
        var result = fn.apply(fn,args.slice(1,args.length));
        return result;
    },

    partialUsingArguments : function(fn) {
        console.log(fn);
        // console.log(arguments);
        var args;
        console.log(arguments.length);
        if(arguments.length === 3){
             // console.log('4');/
             args = Array.prototype.slice.call(arguments,1);
             console.log([undefined].concat(args));
            return fn.bind(undefined,args[0],args[1]);
        }
        if(arguments.length === 2){
            args = Array.prototype.slice.call(arguments);
            console.log(args.slice(1,args.length));
            return fn.bind(undefined,args.slice(1,args.length));
        }
        if(arguments.length === 1){
            return fn.bind();
        }
    },

    curryIt : function(fn) {

    }
  };
});
