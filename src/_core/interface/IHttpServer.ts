export type RequestHandler<TRequest = any, TResponse = any> = (
    request: TRequest,
    response: TResponse,
    next?: Function
) => any

export interface IHttpServer<TRequest = any, TResponse = any> {
    reply(response: any, body: any, statusCode?: number): any;
    get(handler: RequestHandler<TRequest, TResponse>): any
    get(handler: RequestHandler<TRequest, TResponse>, path: string): any
    post(handler: RequestHandler<TRequest, TResponse>): any;
    post(handler: RequestHandler<TRequest, TResponse>, path: string): any;
    listen(port: number | string): any;

    getInstance(): any;
    getHttpServer(): any;
    initHttpServer(): void;
    registerBodyParser(): void
}