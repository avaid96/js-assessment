if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  var name;
  var greeting;
  return {
    createModule : function(str1, str2) {
    	name=str1;
        greeting=str2;
    	sayIt : function()
    	{
    		return this.greeting+', '+this.name;
    	}
    }
  };
});

