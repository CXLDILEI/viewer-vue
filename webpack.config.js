/* eslint-disable import/no-commonjs */
// webpack.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/naming-convention
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'none',
  entry: './src/Index.vue',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'v-viewer.js',
    library: 'v-viewer',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  externals: {
    vue: 'vue',
    'vue-property-decorator': 'vue-property-decorator',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 它会应用到普通的 `.ts` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}
/* eslint-enable import/no-commonjs */
