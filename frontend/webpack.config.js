/**
 * Webpack main configuration 
 * Author: Evinton A. Cordoba  Mosquera
 */

 const path = require('path');

 module.exports = {
     "entry": "./src/index.js",
     "output": {
      "path": path.resolve(__dirname, 'public/js/'),
      "publicPath": "/",
      "clean": true,
      "filename": "bundle.js"
   },module: {
      rules: [
          {  test: /\.jsx?$/, 
             exclude: /node_modules/,
             loader: 'babel-loader',
             options: {
                      //specify that we will be dealing with React code
                      presets: ['@babel/preset-react'] 
                  }
             }, 
             {
              test: /\.m?js$/,
              exclude:/node_modules/,
              use:{
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
             },
             {
                 test: /\.css$/,
                 use: [
                     {loader: 'style-loader'},
                     {
                      loader: 'css-loader'
                    }
                   ]
             },
             {
               test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
               use: [
                 {
                   loader: 'file-loader',
                   options: {
                     name: '[name].[ext]',
                     outputPath: 'fonts/'
                   }
                 }
               ],
               type: "javascript/auto",
             },
            
          ]
    }
 }