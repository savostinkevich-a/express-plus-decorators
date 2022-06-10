import 'reflect-metadata';
import express, {Request, Response} from 'express';
import UserController from "./user/user.controller";
import {RouteDefinition} from "./_core/utils/route-definition";
import {promise} from "./_core/utils/middleware";

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello there!');
});

[UserController].forEach((controller: any) => {
    const instance = new controller()
    const prefix = Reflect.getMetadata("prefix", controller)
    const routes: Array<RouteDefinition> = Reflect.getMetadata("routes", controller)
    routes.forEach(route => {
        app[route.requestMethod](prefix + route.path, promise(async () => (instance[route.methodName]())))
    })
})

app.listen(3000, () => {
    console.log('Started express on port 3000');
});