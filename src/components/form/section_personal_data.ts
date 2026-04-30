export function getPersonalDataHTML() {
    return `
        <div class="section-title">ОСОБИСТІ ДАНІ</div>
            <div class="field">
                <label>Повне ім'я</label>
                <input type="text" placeholder="Тарас Григорович Шевченко">
            </div>
            <div class="field">
                <label>Посада / Спеціалізація</label>
                <input type="text" placeholder="Frontend Developer">
            </div>
            <div class="field-group">
                <div class="field">
                    <label>Email</label>
                    <input type="email" placeholder="you@example.com">
                </div>
                <div class="field">
                    <label>Телефон</label>
                    <input type="tel" placeholder="+38 000 000 00 00">
                </div>
            </div>
            <div class="field-group">
                <div class="field">
                    <label>Місто проживання</label>
                    <input type="text" placeholder="Київ">
                </div>
                <div class="field">
                    <label>GitHub</label>
                    <input type="text" placeholder="https://github.com/example">
                </div>
            </div>
    `;
}