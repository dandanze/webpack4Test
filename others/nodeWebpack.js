var webpack = require('webpack');

webpack({ 
  entry: {
    'index':'./w1.js'
  }, 
  output: { 
    filename: '[name]/bundle.js'
  } 
}, (err, stats) => {
  const info = stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
  }) + '\n\n';
  console.log(info);
})
