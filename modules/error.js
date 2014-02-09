define([], function() {
    function Error() {
    };

    Error.prototype.onerror = function(exception) {
        $$.document.append($$({
            model: exception.message,
            view: {
                format: '<div class="alert alert-error alert-dismissable" data-bind="text">\
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\
                         </div>'
            }
        }));
    };

    return Error;
});
