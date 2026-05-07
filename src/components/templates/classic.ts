export function getClassicTemplate(data: any) {
    return `
        <div class="resume-classic">
            <div class="resume-header">
                <h1>${data.name}</h1>
                <h2>${data.position}</h2>
                <div class="resume-contacts">
                    <span>${data.email}</span>
                    <span>${data.phone}</span>
                    <span>${data.city}</span>
                    <span>${data.github}</span>
                </div>
            </div>
            <div class="resume-body">
                <div class="resume-section">
                    <h3>ПРО СЕБЕ</h3>
                    <p>${data.bio}</p>
                    <h3>ДОСВІД РОБОТИ</h3>
                    <h3>ОСВІТА</h3>
                </div>
            </div>
        </div>
    `;
}
