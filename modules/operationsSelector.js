/**
 * Created by react on 11.02.14.
 */
define([], function () {

    var operationProto = $$({
        model: {
            text: '',
            i: 0,
            operation: null
        },
        view: {
            format: '<option data-bind="text, value=i"></option>'
        }
    });


    function operationsSelector(operationsArray, container) {
        var root = this;

        var operations = $$({
            model: {
                selectedIndex: 0
            },
            view: {
                format: '<select class="operations" data-bind="selectedIndex"></select>'
            },
            controller: {
                'change &': function() {
                    var selectedIdx = parseInt(this.view.$(':selected').attr('value'));
                    this.each(function() {
                        if(this.model.get('i') === selectedIdx) {
                            root.selectOperations(this.model.get('operation'));
                            return false;
                        }
                    });
                }
            }
        });

        for(var i = 0, l = operationsArray.length; i < l; ++i) {
            operations.append($$(operationProto, {
                model: {
                    text: operationsArray[i].displayName,
                    operation: operationsArray[i],
                    i: function() {
                        return i;
                    }()
                }
            }));
        }

        $(container).append(operations.view.$());
    }

    operationsSelector.prototype.selectOperations = function(operation) {
        return operation;
    }

    return operationsSelector;
});
