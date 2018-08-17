import isObject from './isObject';

const deepClone = (obj, ...rest) => {
	for (let clonedObj of rest) {
		for (let prop in clonedObj) {
			if (clonedObj.hasOwnProperty(prop)) {
				if (isObject(clonedObj[prop])) {
					if (!obj[prop])
						obj[prop] = {};

					deepClone(obj[prop], clonedObj[prop]);
				} else
					obj[prop] = clonedObj[prop]
			}
		}
	}
	return obj;
}

export default deepClone;