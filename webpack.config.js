// Definisce il path
const path = require('path');
// Minifica pagine html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Pulisce cartella dist ad ogni build
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Libreria che ci permette di utilizzare le Environment Variables durante lo sviluppo locale
const Dotenv = require('dotenv-webpack');
// Installa fetch
const fetch = require("node-fetch");

module.exports = (env, argv) => {
    const entry = argv.mode === 'development' ? './src/js/index_dev.js' : './src/js/index.js';
    return {
      entry: {
        // Qui specifichiamo il file di ENTRATA, vedi commento sopra
        main: path.resolve(__dirname, entry),
      },
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        // assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },

            {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            },

            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                    },
                },
            },
        ],
    },
    // Configurazione di un plugin, necessario per sveltire il processo di sviluppo vedi asterischi nello snippet successivo **
    devServer: {
      contentBase: './build',
      open: true
    },
    // Plugin per minificare pagine html
    plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/index.html'), // template file
          filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
        // Qui dotenv-webpack viene inizializzato
        new Dotenv(),
      ],
}
};