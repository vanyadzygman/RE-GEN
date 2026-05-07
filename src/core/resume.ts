import { emitter } from './eventEmitter';
import { getClassicTemplate } from '../components//templates/classic';

export function initResume() {
    emitter.on('resume:generate', (data: any) => {
        const preview = document.querySelector('.preview-panel');
        if (preview) {
            preview.innerHTML = getClassicTemplate(data);
        }
    });

    document.querySelector('.btn-generate')?.addEventListener('click', () => {
        emitter.emit('resume:generate', {
            name: document.querySelector<HTMLInputElement>('[placeholder="Тарас Григорович Шевченко"]')?.value || '',
            position: document.querySelector<HTMLInputElement>('[placeholder="Frontend Developer"]')?.value || '',
            email: document.querySelector<HTMLInputElement>('[placeholder="you@example.com"]')?.value || '',
            phone: document.querySelector<HTMLInputElement>('[placeholder="+38 000 000 00 00"]')?.value || '',
            city: document.querySelector<HTMLInputElement>('[placeholder="Київ"]')?.value || '',
            github: document.querySelector<HTMLInputElement>('[placeholder="https://github.com/example"]')?.value || '',
            bio: document.querySelector<HTMLTextAreaElement>('[placeholder="Досвідчений розробник з 3+ роками практики у створенні сучасних веб-застосунків..."]')?.value || '',
        });
    });
}