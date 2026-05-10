export class PriorityQueue {
    items: { section: string, priority: number, html: string }[] = [];

    enqueue(section: string, priority: number, html: string) {
        this.items.push({ section, priority, html });
    }

    dequeue() {
        if (!this.items.length) return null;

        let highest = this.items[0];
        for (let i = 1; i < this.items.length; i++) {
            if (this.items[i].priority < highest.priority) {
                highest = this.items[i];
            }
        }

        const index = this.items.indexOf(highest);
        this.items.splice(index, 1);

        return highest;
    }
}