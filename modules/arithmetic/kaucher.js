/**
 * Created by react on 11.02.14.
 */
define(['modules/error'], function (error) {

    function kaucher() {
        this.displayName = "Kaucher";
    };

    var nPlus = function(val) {
        return Math.max(0, val);
    }

    var nMinus = function(val) {
      return Math.max(0, -val);
    };

    kaucher.prototype.operations = {
        '+': function (f, s) {
            return new f.constructor(f.left + s.left, f.right + s.right);
        },
        '-': function (f, s) {
            return new f.constructor(f.left - s.right, f.right - s.left);
        },
        '*': function (f, s) {
            return new f.constructor(
                Math.max(nPlus(f.left) * nPlus(s.left), nMinus(f.right) * nMinus(s.right)) -
                    Math.max(nPlus(f.right) * nMinus(s.left), nMinus(f.left) * nPlus(s.right)),
                Math.max(nPlus(f.right) * nPlus(s.right), nMinus(f.left) * nMinus(s.left)) -
                    Math.max(nPlus(f.left) * nPlus(s.right), nMinus(f.right) * nPlus(s.left)));
        },
        '/': function (f, s) {
            if (s.left === 0 || s.right === 0) {
                error.onerror(Error("Division by zero interval."));
            }
            return this['*'](f, new f.constructor(1 / s.right, 1 / s.left));
        }
    };

    return kaucher;
});