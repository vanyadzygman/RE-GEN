import { emitter } from './eventEmitter';
import { getClassicTemplate } from '../components//templates/classic';
import { log } from './logger';
import { memoize } from './memoize';

const loggedTemplate = log(getClassicTemplate, 'getClassicTemplate');
const memoizedTemplate = memoize(loggedTemplate);

function getExperience() {
    const blocks = document.querySelectorAll('#experience-list .block');
    return Array.from(blocks).map(block => ({
        position: block.querySelector<HTMLInputElement>('[placeholder="Frontend Developer"]')?.value || '',
        company: block.querySelector<HTMLInputElement>('[placeholder="Google"]')?.value || '',
        start: block.querySelector<HTMLInputElement>('[placeholder="1999"]')?.value || '',
        end: block.querySelector<HTMLInputElement>('[placeholder="2026"]')?.value || '',
    }));
}

function getEducation() {
    const blocks = document.querySelectorAll('#education-list .block');
    return Array.from(blocks).map(block => ({
        degree: block.querySelector<HTMLInputElement>('[placeholder="Бакалавр"]')?.value || '',
        school: block.querySelector<HTMLInputElement>('[placeholder="КПІ ім. Ігоря Сікорського"]')?.value || '',
        start: block.querySelector<HTMLInputElement>('[placeholder="1999"]')?.value || '',
        end: block.querySelector<HTMLInputElement>('[placeholder="2026"]')?.value || '',
    }));
}

export function initResume() {
    emitter.on('resume:generate', (data: any) => {
        const preview = document.querySelector('.preview-panel');
        if (preview) {
            preview.innerHTML = memoizedTemplate(data);
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
            experience: getExperience(),
            education: getEducation(),
        });
    });
}