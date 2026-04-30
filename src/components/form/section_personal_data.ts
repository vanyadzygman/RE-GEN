export function getPersonalDataHTML() {
    return `
        <div class="title">ОСОБИСТІ ДАНІ</div>
            <div>
                <label>Повне ім'я</label>
                <input type="text" placeholder="Тарас Григорович Шевченко">
            </div>
            <div>
                <label>Посада / Спеціалізація</label>
                <input type="text" placeholder="Frontend Developer">
            </div>
            <div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="you@example.com">
                </div>
                <div>
                    <label>Телефон</label>
                    <input type="tel" placeholder="+38 000 000 00 00">
                </div>
            </div>
            <div>
                <div>
                    <label>Місто проживання</label>
                    <input type="text" placeholder="Київ">
                </div>
                <div>
                    <label>GitHub</label>
                    <input type="text" placeholder="https://github.com/example">
                </div>
            </div>
    `;
}