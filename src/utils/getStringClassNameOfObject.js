import isObject from './isObject';

export default function getStringClassNameOfObject(...rest) {
	let className = '';

	if (!rest.length)
		return className;

	for (let arg of rest) {
		className = isObject
			? Object.keys(arg).reduce((res, propName) => (arg[propName]) ? `${res} ${propName}` : res, '')
			: `${className} ${arg}`
	}

	return className.trim();
}