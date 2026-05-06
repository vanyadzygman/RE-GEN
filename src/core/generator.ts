function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();

export function generateId() {
    return `block-${gen.next().value}`;
}