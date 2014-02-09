define({
    $plugins: [
        { module: 'wire/aop' }
    ],
    error: {
      create: {
          module:'modules/error'
      }
    },
    container: document.getElementById('container'),
    interval: {
        create: {
            module: 'modules/interval'
        },
        afterThrowing: {
            checkValidity: 'error.onerror'
        }
    },
    classicOperations: {
        create: {
            module: 'modules/arithmetic/classic'
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
            args: [{$ref: 'calculator'}]
        }
    }
});