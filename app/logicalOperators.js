if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
    	if(a)
    	{
    		return true;
    	}
    	if(b)
    	{
    		return true;
    	}
    	return false;
    },

    and : function(a, b) {
    	if(a)
    	{
    		if(b)
	    	{
	    		return true;
	    	}
    	}
    	return false;
    }
  };
});
