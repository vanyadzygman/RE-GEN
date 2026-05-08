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
                </div>
                <div class="resume-section">
                    <h3>ДОСВІД РОБОТИ</h3>
                    ${data.experience.map((exp: any) => `
                        <div class="resume-block">
                            <div class="resume-block-header">
                                <strong>${exp.position}</strong>
                                <span>${exp.start} - ${exp.end}</span>
                            </div>
                            <p>${exp.company}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="resume-section">
                    <h3>ОСВІТА</h3>
                    ${data.education.map((edu: any) => `
                        <div class="resume-block">
                            <div class="resume-block-header">
                                <strong>${edu.degree}</strong>
                                <span>${edu.start} - ${edu.end}</span>
                            </div>
                            <p>${edu.school}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}