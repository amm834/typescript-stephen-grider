import 'reflect-metadata'
import {Methods} from "./Methods";
import {MetadataKeys} from "./MetadataKeys";
import {RequestHandler} from "express";

interface RouteHandlerDescriptor extends PropertyDescriptor {
	value?: RequestHandler;
}

function routeBinder(method: string) {
	return function (path: string) {
		return function (target: Object, key: string, descriptor: RouteHandlerDescriptor) {
			Reflect.defineMetadata(MetadataKeys.path, path, target, key);
			Reflect.defineMetadata(MetadataKeys.method, method, target, key);
		}
	}
}

export const Get = routeBinder(Methods.get)
export const Post = routeBinder(Methods.post)
export const Put = routeBinder(Methods.put)
export const Path = routeBinder(Methods.patch)
export const Delete = routeBinder(Methods.delete)