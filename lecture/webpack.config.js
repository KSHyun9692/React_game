const path = require('path');

module.exports = {
    name: "wordrelay-seting",
    mode: "development", //실서비스: production
    devtool: "eval",
    resolve: {
        extensions: ['.js', '.jsx', '.css',] //webpack이 알아서 확장자를 찾도록
    },

    entry:{//입력
        app: ['./client'],
    },

    module:{
        rules:[{
            test: /\.jsx/,
            loader: 'babel-loader',
            options:{
                presents:['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },

    output:{//출력
        path: path.join(__dirname, 'dist'),
        filename: "app.js",
    },
};