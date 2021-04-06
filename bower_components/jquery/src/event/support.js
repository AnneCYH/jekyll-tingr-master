define([
	"../var/support"
], support => {

support.focusinBubbles = "onfocusin" in window;

return support;

});
