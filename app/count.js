if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var pause;
        var timeron=0;
    	function counter()
    	{
    		console.log(start)
    		start++;
    		if(start<=end)
    		{
    			pause=setTimeout(counter,100);
                timeron=1;
    		}
    	}
    	counter();
        
    	// not figured this guy yet
    	function cancel() {
    		clearTimeout(pause);
            timeron=0;
		}
    }
  };
});