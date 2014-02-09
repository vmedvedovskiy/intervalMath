define([], function() {
    function Error(text) {
        this.text = text;
    };

    Error.prototype.render = function() {
        return $$({
            model: this,
            view: {
                format: '<div class="error" data-bind="text" /> '
            }
        });
    };

    return Error;
});
