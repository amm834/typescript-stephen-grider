import 'reflect-metadata'
import {AppRouter} from "../../AppRouter";
import {Methods} from "./Methods";
import {MetadataKeys} from "./MetadataKeys";
import {NextFunction, Request, RequestHandler, Response} from "express";

/**
 * @description - Handle the form validations
 * @param keys - Array of keys from form data
 * @return RequestHandler Middleware
 * */
function bodyValidators(keys: string[]): RequestHandler {
	return function (req: Request, res: Response, next: NextFunction) {
		if (!req.body) {
			res.status(422).send('Invalid Request');
			return;
		}

		for (let key in req.body) {
			if (!req.body[key]) {
				res.status(422).end('Invalid Request');
				return;
			}

			next();
		}
	}

}

// @author Aung Myat Moe - @amm834 - MIT license
export function Controller(prefix: string) {
	return function (target: Function) {

		const router = AppRouter.getInstance();

		Reflect.ownKeys(target.prototype).forEach(key => {
			const descriptor = Reflect.getOwnPropertyDescriptor(target.prototype, key);
			if (descriptor) {
				const {value} = descriptor;
				if (!descriptor.configurable) return;
				if (typeof value !== 'function') return;
				if (value === target) return;

				const handler = value;
				const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
				const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
				const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
				const requiredProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];
				const validator = bodyValidators(requiredProps);

				if (path) {
					router[method](`${prefix}${path}`, ...middlewares, validator, handler);
				}
			}
		})
	}
}