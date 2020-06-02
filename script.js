
 jQuery(document).ready(function() {
 // alert(window.location.search)
     if(window.location.search.match(/linkback/)) { 
       console.log('1=' +window.location.search);
       if(!window.location.search.match(/linkback=https%3A%2F%2Fgithub.com/)) {
        if(!window.location.search.match(/\w+$/)) {
		  window.location.search = window.location.search.replace(/linkback=/,'linkback=https%3A%2F%2Fgithub.com');
		}
		else if(!window.location.search.match(/raw.githubusercontent.com/)) {
			window.location.search = window.location.search.replace(/linkback=/,'linkback=https%3A%2F%2Fraw.githubusercontent.com');
		}
	   }		
	    console.log('2=' +window.location.search);
	  }
     }
	 );   
 
///http://www.epicurus.bz/greebo/doku.php?id=playgroun:repo_2&linkback=https%3A%2F%2Fraw.githubusercontent.com%2Fturnermm%2FTextInsert%2Fmaster%2Fplugin.info.txt