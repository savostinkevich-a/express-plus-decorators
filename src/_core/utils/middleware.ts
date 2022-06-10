import {NextFunction, Request, Response} from "express";

export const promise = (middleware: any) => (
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const result = await middleware()
            if (result) response.send(result)
            else next()
        } catch (error) {
            next(error)
        }
    }
)