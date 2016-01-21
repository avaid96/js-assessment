if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var found=0;
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]==item){
                found=1;
                return i;
            }
        };
        if(found==0){
            return -1;
        }
    },

    sum : function(arr) {
        var sum=0;
        for (var i = 0; i < arr.length; i++) {
            sum=sum+arr[i];
        };
        return sum;
    },

    remove : function(arr, item) {
        var newarr=[];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]!=item)
            {
                newarr.push(arr[i]);
            }   
         }; 
        return newarr;
    },

    removeWithoutCopy : function(arr, item) {
        while(arr.indexOf(item)>-1)
        {
            arr.splice(arr.indexOf(item), 1)
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        var newarr=[]
        for (var i = 0; i < arr.length-1; i++) {
            newarr.push(arr[i]);
        };
        return newarr;
    },

    prepend : function(arr, item) {
        var newarr=[];
        newarr.push(item);
        for (var i = 0; i < arr.length; i++) {
            newarr.push(arr[i]);
        };
        return newarr;
    },

    curtail : function(arr) {
        var newarr=[];
        if(arr.length<=1){return newarr;}
        for (var i = 1; i < arr.length; i++) {
            newarr.push(arr[i]);
        };
        return newarr;
    },

    concat : function(arr1, arr2) {
        var newarr=[];
        for (var i = 0; i < arr1.length; i++) {
            newarr.push(arr1[i]);
        };
        for (var j = 0; j < arr2.length; j++) {
            newarr.push(arr2[j]);
        };
        return newarr;
    },

    insert : function(arr, item, index) {
        var newarr=[];
        for (var i = 0; i < arr.length; i++) {
            if(i==index){newarr.push(item);}
            newarr.push(arr[i]);
        };
        return newarr;
    },

    count : function(arr, item) {
        var count=0;
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]==item){count++;}
        };
        return count;
    },

    // i know there's a better way to do this one
    duplicates : function(arr) {
        var duplicates=[];
        for (var i = 0; i < arr.length; i++) {
            var count=0;
            for (var j = i; j < arr.length; j++) {
                if(arr[j]==arr[i]){count++;}
            };
            if(count>1 && duplicates.indexOf(arr[i])==-1){
                duplicates.push(arr[i]);
            }
        };
        return duplicates;
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i]=arr[i]*arr[i];
        };
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occ=[];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]==target)
            {
                occ.push(i);
            }
        };
        return occ;
    }
  };
});
