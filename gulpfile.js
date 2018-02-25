var fs    = require('fs');
var path  = require('path');
var gulp  = require('gulp');
var glob  = require('glob');
var babel = require('babel-core');
var mkdir = require('mkdirp');


/**
 * 创建目录
 */
const cwd    = process.cwd();
const outDir = path.join(cwd, 'build');


const babelOptions = {
  presets: [
    require('babel-preset-env'),
    require('babel-preset-react'),
  ]
};


gulp.task('default', function() {
  // place code for your default task here
});


function babelCompileJS(filePath) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return;
    }

    var res = babel.transform(content, babelOptions);
    var to = filePath.replace('client', 'build');
    mkdir(path.dirname(to), innerErr => {
      fs.writeFile(to, res.code, () => {});
    });
  });
}


gulp.task('copy', () => {
  console.log('\ncoping files...\n');

  gulp
    .src('client/**/*.html')
    .pipe(gulp.dest('build'));
});


gulp.task('build', ['copy'], function(filePath) {
  console.log('filePath => ', filePath);

  if (typeof filePath === 'string') {
    babelCompileJS(filePath);
  } else {
    glob('client/**/index.js', (err, files) => {
      console.log('files => ', files);
      files.forEach(filename => {
        babelCompileJS(filename);
      });
    });
  }
});

