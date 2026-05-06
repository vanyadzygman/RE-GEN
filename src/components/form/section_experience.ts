export function getExperienceHTML() {
    return `
    <div id="experience-list">
        <div class="section-title">ДОСВІД РОБОТИ</div>
        <div class="block">
            <div class="block-header">
                <span class="block-title">Місце роботи #1</span>                    
                <button class="block-delete">&times</button>
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
    </div>
    <button class="btn-add" id="add-experience">+ Додати місце роботи</button>
  `;    
} 