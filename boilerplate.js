var Boilerplate = require('boilerplate');
var h5bp = new Boilerplate({
  options: {
    cwd: 'vendor/h5bp/dist'
  },
  root: {src: ['{.*,*.*}'],   dest: 'src/'},
  css:  {src: ['css/*.css'],  dest: 'src/'},
  doc:  {src: ['doc/*.md'],   dest: 'src/'},
  js:   {src: ['js/**/*.js'], dest: 'src/'}
});
console.log(h5bp);