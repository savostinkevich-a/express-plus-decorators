import {Adapter} from "./adapter";
import express from "express";
import {isNull, isObject} from "../utils/check";
import bodyParser from "body-parser";
import * as http from "http";

export class ExpressAdapter extends Adapter {
    constructor() {
        super(express());
    }

    reply(response: any, body: any): any {
        isNull(body)
            ? response.send()
            : isObject(body)
                ? response.json(body) : response.send(String(body))
    }

    listen(port: any): any {
        return this.httpServer.listen(port)
    }

    registerBodyParser() {
        const middleware = {
            jsonParser: bodyParser.json(),
            urlencodedParser: bodyParser.urlencoded({ extended: true })
        }
        Object.keys(middleware).forEach((key) => {
            this.use((middleware as any)[key])
        })
    }

    initHttpServer() {
        this.httpServer = http.createServer(this.getInstance());
    }
}