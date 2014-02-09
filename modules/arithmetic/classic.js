/*
 Сложение: [a,b] + [c,d] = [a + c, b + d]
 Вычитание: [a,b] − [c,d] = [a − d, b − c]
 Умножение: [a,b] × [c,d] = [min (ac, ad, bc, bd), max (ac, ad, bc, bd)]
 Деление: [a,b] / [c,d] = [min (a/c, a/d, b/c, b/d), max (a/c, a/d, b/c, b/d)]
 */
define([], function () {

    function classicOperations() {
    };

    classicOperations.prototype.operations = {
        '+': function (f, s) {
            return new f.constructor(f.left + s.left, f.right + s.right);
        },
        '-': function (f, s) {
            return new f.constructor(f.left - s.right, f.right - s.left);
        },
        '*': function (f, s) {
            return new f.constructor(
                Math.min(f.left * s.left, f.left * s.right, f.right * s.left, f.right * s.right),
                Math.max(f.left * s.left, f.left * s.right, f.right * s.left, f.right * s.right)
            );
        },
        '/': function (f, s) {
            if (s.left === 0 || s.right === 0) {
                throw new Error("Division by zero interval.");
            }
            return new f.constructor(
                Math.min(f.left / s.left, f.left / s.right, f.right / s.left, f.right / s.right),
                Math.max(f.left / s.left, f.left / s.right, f.right / s.left, f.right / s.right)
            );
        }
    };

    return classicOperations;
});