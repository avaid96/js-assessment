if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var re=/\d/;
        return re.test(str);
    },

    containsRepeatingLetter : function(str) {
        var re=/([a-zA-Z])\1/;
        return re.test(str)
    },

    endsWithVowel : function(str) {
        var re=/[a,e,i,o,u,A,E,I,O,U]$/
        return re.test(str)
    },

    captureThreeNumbers : function(str) {
        //working on this
        var re=/\d\d\d/;
        var num=str.match(re);
        if(num)
        {
            return num[0];
        }
        return false;
    },

    matchesPattern : function(str) {
        var re=/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
        return re.test(str)
    },
    isUSD : function(str) {
        var re= /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;
        return re.test(str)
    }
  };
});
