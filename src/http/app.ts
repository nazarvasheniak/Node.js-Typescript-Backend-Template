import express from "express";
import bodyParser from "body-parser";

import { IndexRoute, UserRoute } from './routes';

class App {
    private express = express();
    private indexRoute: IndexRoute;
    private userRoute: UserRoute;

    constructor() {
        this.indexRoute = new IndexRoute();
        this.userRoute = new UserRoute();

        this.setOptions();
        this.mountRoutes();
    }

    private setOptions() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    private mountRoutes() {
        const indexRoute = this.indexRoute.getRouter();
        const userRoute = this.userRoute.getRouter();

        this.express.use('/', indexRoute);
        this.express.use('/users', userRoute);
    }

    public get appInstance() {
        return this.express;
    }
}

export default new App();