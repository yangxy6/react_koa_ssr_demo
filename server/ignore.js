/*
 * node中无法引入静态资源，只能忽略不去解析以下文件类型
 */
const ignore = () => {
  var extensions = ['.css', '.scss', '.less', '.png', '.jpg', '.gif'];
  for (let i = 0, len = extensions.length; i < len; i++) {
    require.extensions[extensions[i]] = function() {
      return false;
    };
  }
};
module.exports = ignore;
