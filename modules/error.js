define([], function() {

    var obj = $$({
        model: {
            text: ''
        },
        view: {
            format: '<div class="alert alert-danger" data-bind="text"></div>'
        },
        controller: {
            'click &': function() {
                this.view.$().hide();
            }
        }
    });

    function Error() {

    };

    Error.prototype.onerror = function(exception) {
        obj.model.set({text: exception.message});
        if(!this.hasAppended) {
            // TODO гавнокод. отрефакторить когда будет время.
            $('#error').append(obj.view.$());
            this.hasAppened = true;
        }

        obj.view.$().show();
    };

    return new Error();
});
