const configs = require("./configs");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const webpackConfig = require("./build/webpack.dev.config");

const address = `http://${configs.host}:${configs.port}`;

// Start webpack server
const compiler = webpack(webpackConfig);
webpackConfig.entry.unshift(
  `webpack-dev-server/client?${address}/`,
  "webpack/hot/dev-server"
);
const server = new WebpackDevServer(compiler, {
    hot: true
});

server.listen(configs.port, configs.host, err => {
    if (err) {
        console.log(err);
    }

    console.log(`Listening on ${address}`);
});

// Start electron
const { spawn } = require("child_process");
spawn("electron", ["."]);
