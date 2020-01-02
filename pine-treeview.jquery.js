(function( factory ) {
	if (typeof(require) === 'function') {
		module.exports = factory(jQuery);
	} else {
		factory(jQuery);
	}
})(function( $ ) {

    $.fn.treeview = function(parameters) {
        var data = parameters.data;
    };
});