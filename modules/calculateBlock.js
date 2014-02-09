/**
 * Created by react on 06.02.14.
 */
define([], function () {

    var cell = $$({
        model: {
            glyph: ''
        },
        view: {
            format: '<td class="btn btn-primary calcBtn" data-bind="glyph"></td>'
        },
        controller: {
            'click &': function() {
                this.action(this.model.get('glyph'));
            }
        },
        action: null
    });

    var cellGroup = $$({
        view: {
            format: '<tr></tr>'
        }
    });

    var calculateBlockProto = $$({
        view: {
            format: '<table><tbody><tr><td colspan="4"><input type="text" data-bind="input" /> </td></tr></tbody></table>'
        },
        style: '& input { width: 100%; }'
    });

    function calculateView(calculator) {
        var calculateBlock = $$(calculateBlockProto, {
            controller: {
                update: function() {
                    this.model.set({input: calculator.input});
                }
            }
        });

        var appendCharacter = function(glyph) {
            calculator.input += glyph;
            calculateBlock.controller.update();
        };

        var setOperation = function(glyph) {
            calculator.setOperand();
            calculator.setOperation(glyph);
            calculateBlock.controller.update();
        }


        var numbers = [];
        for (var i = 0; i < 10; ++i) {
            numbers.push($$(cell, {model: {glyph: i}, action: appendCharacter }));
        }

        var plus = $$(cell, {model: {glyph: '+'}, action: setOperation }),
            minus = $$(cell, {model: {glyph: '-'}, action: setOperation }),
            mul = $$(cell, {model: {glyph: '*'}, action: setOperation }),
            divide = $$(cell, {model: {glyph: '/'}, action: setOperation }),
            lbrace = $$(cell, {model: {glyph: '['}, action: appendCharacter }),
            rbrace = $$(cell, {model: {glyph: ']'}, action: appendCharacter }),
            comma = $$(cell, {model: {glyph: ','}, action: appendCharacter}),
            decimal = $$(cell, {model: {glyph: '.'}, action: appendCharacter}),
            evaluate = $$(cell, {model: {glyph: '='}, action: function() {
                calculator.setOperand();
                calculator.evaluate();
                calculateBlock.controller.update();
            } });

        var row1 = $$(cellGroup);
        row1.append(rbrace);
        row1.append(lbrace);
        row1.append(minus);
        var row2 = $$(cellGroup);
        row2.append(numbers[7]);
        row2.append(numbers[8]);
        row2.append(numbers[9]);
        row2.append(plus);
        var row3 = $$(cellGroup);
        row3.append(numbers[4]);
        row3.append(numbers[5]);
        row3.append(numbers[6]);
        row3.append(mul);
        var row4 = $$(cellGroup);
        row4.append(numbers[1]);
        row4.append(numbers[2]);
        row4.append(numbers[3]);
        row4.append(divide);
        var row5 = $$(cellGroup);
        row5.append(decimal);
        row5.append(numbers[0]);
        row5.append(comma);
        row5.append(evaluate);

        calculateBlock.append(row1, 'tbody');
        calculateBlock.append(row2, 'tbody');
        calculateBlock.append(row3, 'tbody');
        calculateBlock.append(row4, 'tbody');
        calculateBlock.append(row5, 'tbody');

        $$.document.append(calculateBlock);
    }

    return calculateView;
});