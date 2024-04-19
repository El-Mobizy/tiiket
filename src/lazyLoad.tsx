import {lazy} from 'react';

export const lazyLoad = (path: string,exportName:string) => lazy(()=>{
    const promise= import(path)
    return exportName == null ?  promise : 
    promise.then((module) => ({default: module[exportName]}))
});
