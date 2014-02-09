/**
 * Created by react on 09.02.14.
 */
define([], function() {

    var operand;
    function Calculator(operandCtor, operations) {
        this.stack = [];
        this.input = '';
        operand = operandCtor.constructor;
        this.operations = operations.operations;
    };

    Calculator.prototype.setOperand = function() {
        this.stack.push(new operand(this.input));
        this.input = '';
    };

    Calculator.prototype.setOperation = function(op) {
        // selectedOperation must be a function of two args
        this.selectedOperation = this.operations[op];
        this.input = '';
    };

    Calculator.prototype.evaluate = function() {
        if(this.stack.length !== 2) {
            throw new Error('only two operands are allowed');
        }

        this.input = this.selectedOperation(this.stack[0], this.stack[1]).toString();
        this.stack = [];
    };

    return Calculator;
});
