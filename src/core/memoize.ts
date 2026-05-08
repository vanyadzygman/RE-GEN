export function memoize(fn: Function) {
    const cache: { [key: string]: any } = {};

    return function(...args: any[]) {
        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            console.log('з кешу');
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}