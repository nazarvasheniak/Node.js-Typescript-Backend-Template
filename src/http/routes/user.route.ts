import express from 'express';
import { UserController } from '../controllers';

export class UserRoute {
    private router: express.Router;
    private controller: UserController = new UserController();

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