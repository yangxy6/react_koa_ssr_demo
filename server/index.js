// Do this as the first thing so that any code reading it knows the right env.
// process.env.BABEL_ENV = 'development';
// process.env.NODE_ENV = 'development';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

require('./ignore.js')();
require('@babel/register'); // nodejs es6 转 es5
require('@babel/polyfill');
require('asset-require-hook')({
  // 识别图片
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 10000,
  name: 'static/media/[name].[ext]'
});
require('./app.js');
