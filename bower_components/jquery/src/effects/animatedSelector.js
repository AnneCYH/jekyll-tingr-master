define([
	"../core",
	"../selector",
	"../effects"
], jQuery => {

jQuery.expr.filters.animated = elem => jQuery.grep(jQuery.timers, fn => elem === fn.elem).length;

});
