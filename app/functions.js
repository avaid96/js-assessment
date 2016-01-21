if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj)
    },

    functionFunction : function(str) {
        return function(t){
            return str+', '+t;
        }

    },

    makeClosures : function(arr, fn) {
        var closure=function(value)
        {
            return function() {return fn(value);};
        };
        var result=[]
        for (var i = 0; i < arr.length; i++) {
            result.push(closure(arr[i]));
        };
        return result;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
            return fn.call(null, str1, str2, str3);
        };
    },

    useArguments : function() {
        var sum=0;
        for (var i = 0; i < arguments.length; i++) {
            sum+=arguments[i];
        };
        return sum;
    },

    callIt : function(fn) {
        var call = Array.prototype.slice.call(arguments, 1, arguments.length);
        return fn.apply(null, call);
    },

    partialUsingArguments : function(fn) {
        var call = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            return fn.apply(null, call.concat(Array.prototype.slice.call(arguments)))
        };
    },

    curryIt : function(fn) {
        return caller([], fn.length);
        function called(fn, arguments) {
            return fn.apply(null, arguments);
        }

        function caller(untilnow, expt) {
          return function (arg) {
            untilnow.push(arg);
            var args = untilnow.length === expt;

            if (args) {
              return called(fn, untilnow);
            } else {
              return caller(untilnow, expt);
            }
          };
        }
    }
  };
});
