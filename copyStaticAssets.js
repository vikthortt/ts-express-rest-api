const shell = require('shelljs');

shell.cp('-R', 'src/resources', 'dist/');
shell.mkdir('dist/public');
