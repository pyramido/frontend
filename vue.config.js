// const eslintConfig = require('./eslintrc.js');
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    devtool: 'source-map',
  },
};
