define({
    $plugins: [
        { module: 'wire/aop' }
    ],
    calcBlock: document.getElementById('calculator'),
    opsBlock: document.getElementById('arithmetic'),
    operationsSelector: {
        create: {
            module: 'modules/operationsSelector',
            args: [[{$ref: 'classicOperations'}, {$ref: 'kaucher'}], {$ref: 'opsBlock'}]
        },
        afterReturning: {
            selectOperations: 'calculator.setOperationsSet'
        }
    },
    interval: {
        create: {
            module: 'modules/interval'
        }
    },
    classicOperations: {
        create: {
            module: 'modules/arithmetic/classic'
        }
    },
    kaucher: {
        create: {
            module: 'modules/arithmetic/kaucher'
        }
    },
    calculator: {
        create: {
            module: 'modules/calculator',
            args: [{$ref: 'interval'}, {$ref: 'classicOperations'}]
        }
    },
    calculateView: {
        create: {
            module: 'modules/calculateBlock',
            args: [{$ref: 'calculator'}, {$ref: 'calcBlock'}]
        }
    }
});