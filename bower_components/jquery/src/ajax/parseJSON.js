define([
	"../core"
], jQuery => {

// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = data => JSON.parse( data + "" );

return jQuery.parseJSON;

});
