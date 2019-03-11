import express from 'express';
import { IndexController } from '../controllers';

export class IndexRoute {
    private router: express.Router;
    private controller: IndexController = new IndexController();

    constructor() {
        this.router = express.Router();
        this.mountRoutes();
    }

    private mountRoutes() {
        this.router.get('/', this.controller.get);
        this.router.post('/', this.controller.post);
    }

    public getRouter() {
        return this.router;
    }
}