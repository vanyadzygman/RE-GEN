export function log(fn: Function, name: string) {
    return function(...args: any[]) {
        const timestamp = new Date().toISOString()
        const start = Date.now();
        console.log(`[${timestamp}] ${name} called with:`, args);

        try {
            const result = fn(...args)
            const duration = Date.now() - start;
            console.log(`[${timestamp}] ${name} finished in ${duration}ms`);
            return result;
        } catch (err) {
            console.error(`[${timestamp}] ${name} failed:`, err)
            throw err;
        }
    };
}