import { emitter } from './eventEmitter';
import { getClassicTemplate } from '../components//templates/classic';
import { log } from './logger';
import { memoize } from './memoize';
import { PriorityQueue } from './queue'
import { findCallback } from './asyncFind';
import { createFormProxy } from './formProxy';


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
            const proxiedData = createFormProxy(data);

            const queue = new PriorityQueue();
            queue.enqueue('personal', 1, '');
            queue.enqueue('experience', 2, '');
            queue.enqueue('education', 3, '');
            queue.enqueue('bio', 4, '');

            const order: string[] = [];
            while (queue.items.length) {
                const section = queue.dequeue();
                if (section) order.push(section.section);
            }

            console.log('секції в порядку пріоритету:', order);
            preview.innerHTML = memoizedTemplate(proxiedData);
        }
    });

    document.querySelector('.btn-generate')?.addEventListener('click', () => {
        const requiredFields = [
            'Тарас Григорович Шевченко',
            'Frontend Developer',
            'you@example.com',
            '+38 000 000 00 00',
            'Київ',
        ];
        findCallback(requiredFields, (emptyField) => {
            if (emptyField) {
                window.alert(`Заповніть поле: ${emptyField}`);
                return
            }
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
            })
        });
    });
}