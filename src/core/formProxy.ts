export function createFormProxy(data: any) {
    return new Proxy(data, {
        get(target, key) {
            console.log(`[FormProxy] reading: ${String(key)} = ${target[key]}`);
            return target[key];
        }
    });
}