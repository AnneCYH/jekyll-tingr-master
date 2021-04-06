define([
	"../core"
], jQuery => {

/**
 * Determines whether an object can have data
 */
jQuery.acceptData = owner => owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );

return jQuery.acceptData;
});
