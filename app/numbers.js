if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        // var bin="";
        // if(num==0){return 0;}
        // while(num!=1)
        // {
        //     bin=(num%2).toString()+bin;
        //     num=Math.floor(num/2);
        // }
        // bin="1"+bin;
        // return(+(bin[bin.length-bit]));  
        return ((num >> (bit - 1)) & 1)  
    },

    base10: function(str) {
        var num=0;
        for (var i = str.length-1; i >= 0; i--) {
            num=num+(Math.pow(2,str.length-1-i)*(+(str.charAt(i))));
        };
        return num;
    },

    convertToBinary: function(num) {
        var bin="";
        if(num==0){return 0;}
        while(num!=1)
        {
            bin=(num%2).toString()+bin;
            num=Math.floor(num/2);
        }
        bin="1"+bin;
        while(bin.length<8)
        {
            bin="0"+bin;
        }
        return bin;
    },

    multiply: function(a, b) {
        return (+(a*b).toFixed(8));
    }
  };
});

