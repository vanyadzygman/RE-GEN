import { generateId } from './generator';

export function initBlocks() {
    const addExpBtn = document.getElementById('add-experience');
    addExpBtn?.addEventListener('click', () => {
        const id = generateId();
        const count = document.querySelectorAll('#experience-list .block').length + 1;
        const block = `
            <div class="block" data-id="${id}">
                <div class="block-header">
                    <span class="block-title">Місце роботи #${count}</span>
                    <button class="block-delete" data-id="${id}">&times;</button>
                </div>
                <div class="field">
                    <label>Посада</label>
                    <input type="text" placeholder="Frontend Developer">
                </div>
                <div class="field">
                    <label>Компанія</label>
                    <input type="text" placeholder="Google">
                </div>
                <div class="field-group">
                    <div class="field">
                        <label>Початок</label>
                        <input type="text" placeholder="1999">
                    </div>
                    <div class="field">
                        <label>Кінець</label>
                        <input type="text" placeholder="2026">
                    </div>
                </div>
            </div>
    `;
    document.getElementById('experience-list')!.insertAdjacentHTML('beforeend', block);
    });

    const addEduBtn = document.getElementById('add-education');
    addEduBtn?.addEventListener('click', () => {
        const id = generateId();
        const count = document.querySelectorAll('#education-list .block').length + 1;
        const block = `
            <div class="block" data-id="${id}">
                <div class="block-header">
                    <span class="block-title">Освіта #${count}</span>
                    <button class="block-delete" data-id="${id}">&times;</button>
                </div>
                <div class="field">
                    <label>Ступінь / Спеціальність</label>
                    <input type="text" placeholder="Бакалавр">
                </div>
                <div class="field">
                    <label>Навчальний заклад</label>
                    <input type="text" placeholder="КПІ ім. Ігоря Сікорського">
                </div>
                <div class="field-group">
                    <div class="field">
                        <label>Початок</label>
                        <input type="text" placeholder="1999">
                    </div>
                    <div class="field">
                        <label>Кінець</label>
                        <input type="text" placeholder="2026">
                    </div>
                </div>
            </div>
    `;
    document.getElementById('education-list')!.insertAdjacentHTML('beforeend', block);
    });

    document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('block-delete')) {
        target.closest('.block')?.remove();
    }
});
}