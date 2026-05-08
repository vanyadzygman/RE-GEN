import { getHeaderHTML } from './components/main/header';
import { getTemplateDesignHTML } from './components/form/section_template_design';
import { getPersonalDataHTML } from './components/form/section_personal_data';
import { getBiographyHTML } from './components/form/section_biography';
import { getExperienceHTML } from './components/form/section_experience';
import { getEducationHTML } from './components/form/section_education';
import { getGenerateButtonHTML } from './components/form/generate_button';
import { getReviewHTML } from './components/main/preview';
import './styles/main.scss'
// логіка
import { initBlocks } from './core/block';
import { initResume } from './core/resume';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${getHeaderHTML()}
    <div class="app">
        <aside class="form">
            ${getTemplateDesignHTML()}
            ${getPersonalDataHTML()}
            ${getBiographyHTML()}
            ${getExperienceHTML()}
            ${getEducationHTML()}
            ${getGenerateButtonHTML()}
        </aside>
        <main class="preview-panel">
            ${getReviewHTML()}
        </main>
    </div>
`
initBlocks();
initResume();