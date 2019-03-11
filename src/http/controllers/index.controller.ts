import { Request, Response } from 'express';

export class IndexController {
    constructor() { }

    public get(request: Request, response: Response) {
        response.send('GET');
    }

    public post(request: Request, response: Response) {
        response.send('POST');
    }
}