/**
 * Created by react on 05.02.14.
 */
define([], function () {
    var intervalRegexp = /\[([-+]?[0-9]*\.?[0-9]+)\,([-+]?[0-9]*\.?[0-9]+)\]/;

    function Interval() {
        if (typeof arguments[0] === 'string') {
            this.parse(arguments[0]);
        } else if (typeof arguments[0] === 'number'
            && typeof arguments[1] === 'number') {
            var left = arguments[0],
                right = arguments[1];
            if (right < left) {
                throw  new Error("Left bound must be less then right bound");
            }

            this.left = left || 0;
            this.right = right || 0;
        }
    };

    Interval.prototype.parse = function(string) {
        if(!intervalRegexp.test(string)) {
            throw new Error("Input value " + string + " is not interval");
        }

        var interval = string.match(intervalRegexp);
        this.left = parseFloat(interval[1]);
        this.right = parseFloat(interval[2]);
    };

    Interval.prototype.isValid = function () {
        return !(this.left === NaN || this.right === NaN);
    };

    var parseValue = function (string) {
        return parseFloat(string);
    };

    Interval.prototype.toString = function () {
        return '[' + [this.left, this.right].join() + ']';
    };

    return Interval;
});