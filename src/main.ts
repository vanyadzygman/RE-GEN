import './styles/main.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="header">
        <div class="header-logo">RE·GEN</div>
        <div class="header-sub">Генератор резюме</div>
    </header>

    <div class="app">
        <aside class="form">

            <div class="title">ШАБЛОН ОФОРМЛЕННЯ</div>
            <div class="options">
                <button class="button">
                    <span class="icon">📄</span>
                    CLASSIC
                </button>
                <button class="button">
                    <span class="icon">🎨</span>
                    MODERN
                </button>
                <button class="button">
                    <span class="icon">✨</span>
                    CREATIVE
                </button>
            </div>
        
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


            <div class="title">ПРО СЕБЕ</div>
            <div>
                <label>Короткий опис (2–3 речення)</label>
                <textarea placeholder="Досвідчений розробник з 3+ роками практики у створенні сучасних веб-застосунків..."></textarea>
            </div>

            <div class="title">ДОСВІД РОБОТИ</div>
                
            <div class="title">ОСВІТА</div>

        </aside>
    </div>

<div class="ticks"></div>
<section id="spacer"></section>
`
