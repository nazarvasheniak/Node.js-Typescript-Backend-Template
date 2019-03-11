import http from "http";
import https from "https";

import config from './common/configuration';
import app from './http/app';

const server = http.createServer(app.appInstance);
server.listen(config.port.http, (err) => {
    if(err)
        console.log(err);

    console.log(`Listening on port: ${config.port.http}`);
});