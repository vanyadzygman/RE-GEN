export function findCallback(fields: string[], callback: (emptyField: string | null) => void) {
    let i = 0;
    
    function next() {
        if (i >= fields.length) {
            callback(null);
            return;
        }

        const field = fields[i++];
        const input = document.querySelector<HTMLInputElement>(`[placeholder="${field}"]`);

        if (!input?.value) {
            callback(field);
            return;
        }
        next();
    }
    next();
}