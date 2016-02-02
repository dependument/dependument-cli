(function() {
  var Dependument = require('dependument').Dependument;

  var d = new Dependument({
    source: 'package.json',
    output: 'DEPENDENCIES.md'
  });

  d.process();
})();
