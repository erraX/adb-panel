import configs from './configs';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './build/webpack.dev.config';

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
const {spawn} = require('child_process');
const electronProcess = spawn('electron', ['-r', '@babel/register', '.']);

// Output log
electronProcess.stdout.pipe(process.stdout);
electronProcess.stderr.pipe(process.stdout);