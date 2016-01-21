if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var listOfFiles = [];
    	var directories = [];
		makeDir(data);
		function makeDir(dir) {
      		var size;
      		var file;
      		var files = dir.files;
			directories.push( dir.dir );
			for (var i = 0, size = files.length; i < size; i++) {
        		file = files[i];
        		if (typeof file === 'string') {
          			if (!dirName || directories.indexOf(dirName) > -1) {
            			listOfFiles.push(files[i]);
          			}
        		} 
        		else {
          			makeDir(files[i]);
        		}
      		}
		directories.pop();
    	}
		return listOfFiles;
    },

    permute: function(arr) {
    	var temp = [];
    	var answer = [];

	    function perm(a) {
	      var len, item;
	      for (var i = 0, len = arr.length; i < len; i++) {
	        item = arr.splice(i, 1)[0];
	        temp.push(item);
	        if (arr.length) {
	          perm(arr);
	        } 
	        else {
	          logResult();
	        }
	        arr.splice(i, 0, item);
	        temp.pop();
	      }
	      return answer;
	    }
	    return perm(arr);

	    function logResult() {
	      answer.push(temp.slice());
    	}
	}
  };
});
