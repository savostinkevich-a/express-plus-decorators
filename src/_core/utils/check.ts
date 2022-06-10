export const isUndefined = (o: any): o is undefined => typeof o === "undefined"

export const isNull = (o: any): o is null | undefined => isUndefined(o) || o === null

export const isObject = (o: any): o is object => !isNull(o) && typeof o === 'object';