/**
 * Created by react on 05.02.14.
 */
(function(curl) {

    var config = {
        packages: [
            { name: 'curl', location: 'lib/curl', main: 'curl' },
            { name: 'wire', location: 'lib/wire', main: 'wire' },
            { name: 'when', location: 'lib/when', main: 'when' },
            { name: 'meld', location: 'lib/meld', main: 'meld' }
        ]
    };

    curl(config, ['wire', 'modules/main']).then(function(wire, spec) {
        wire(spec);
    }, function(err) {
        console.log(err);
    });

})(curl);
