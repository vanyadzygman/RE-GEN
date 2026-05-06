export function getEducationHTML() {
    return `
    <div id="education-list">
        <div class="section-title">ОСВІТА</div>
        <div class="block">
            <div class="block-header">
                <span class="block-title">Освіта #1</span>
                <button class="block-delete">&times</button>
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
    </div>
    <button class="btn-add" id="add-education">+ Додати освіту</button>
  `;    
}