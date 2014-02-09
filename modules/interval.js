/**
 * Created by react on 05.02.14.
 */
define([], function () {
    var intervalRegexp = /\[([-+]?[0-9]*\.?[0-9]+)\,([-+]?[0-9]*\.?[0-9]+)\]/;

    var parse = function(string) {
        if(!intervalRegexp.test(string)) {
            throw new Error("Input value " + string + " is not an interval.");
        }

        var interval = string.match(intervalRegexp);
        return [interval[0], interval[1]];
    };


    function Interval() {
        var left, right;
        if (typeof arguments[0] === 'string') {
            var lr = parse(arguments[0]);
            left = lr[0];
            right = lr[1];
        } else if (typeof arguments[0] === 'number'
            && typeof arguments[1] === 'number') {
            left = arguments[0],
            right = arguments[1];
        }

        this.checkValidity(left, right);
        this.left = left || 0;
        this.right = right || 0;
    };

    Interval.prototype.checkValidity = function(left, right) {
        if (right < left) {
            throw new Error("Left bound must be less then right bound");
        }
    }

    Interval.prototype.toString = function () {
        return '[' + [this.left, this.right].join() + ']';
    };

    return Interval;
});