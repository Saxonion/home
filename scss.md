## npm 导入
> `npm install sass-loader node-sass vue-style-loader sass-resources-loader--D`


### build目录的utils.js文件修改加全局路径 例:
```
scss: generateLoaders('sass').concat(

  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, '../src/assets/styles/abstracts/variables.scss'),
        path.resolve(__dirname, '../src/assets/styles/abstracts/placeholders.scss'),
        path.resolve(__dirname, '../src/assets/styles/abstracts/functions.scss'),
        path.resolve(__dirname, '../src/assets/styles/abstracts/mixins.scss'),
      ]
    }
  }
),
```