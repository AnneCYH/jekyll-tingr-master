define([
	"../core",
	"../selector"
], jQuery => {

jQuery.expr.filters.hidden = elem => elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
jQuery.expr.filters.visible = elem => !jQuery.expr.filters.hidden( elem );

});
