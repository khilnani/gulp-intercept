gulp-intercept
==============

> Gulp plugin to intercept a Gulp stream.

The plugin accepts a function with a single argument - a `chunk` or `file`. Do whatever you need to eg. parse the file if its json, convert it if less or coffeescript or simply perform an update to its contents. 

### Usage

- Install - `npm install gulp-intercept --save-dev`
- Update your `gulpfile.js`:

```javascript
var intercept = require('./gulp-intercept');
var concat = require('gulp-concat');

gulp.task('task', function () {
  gulp.src(['./*.txt'])
    .pipe(intercept(function(file){
      console.log('FILE: ' + file.path );
      console.log('OLD CONTENT: ' + file.contents.toString() );
      file.contents = new Buffer( "Hello!!!" );
      console.log('NEW CONTENT: ' + file.contents.toString() );
      return file;
    })) 
    .pipe(concat('onefile.txt'))
    .pipe(gulp.dest('./'));
});
```

### API

#### intercept( method )

Type: `Function` method - Is a function that accepts a `File` and returns a `File`.

```javascript
function ( file ) {
  // do stuff
  return file;
}
```
