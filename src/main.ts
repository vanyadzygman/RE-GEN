import { getHeaderHTML } from './components/main/header';
import { getTemplateDesignHTML } from './components/form/section_template_design';
import { getPersonalDataHTML } from './components/form/section_personal_data';
import { getBiographyHTML } from './components/form/section_biography';
import { getExperienceHTML } from './components/form/section_experience';
import { getEducationHTML } from './components/form/section_education';
import { getReviewHTML } from './components/main/review';
import './styles/main.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${getHeaderHTML()}
    <div class="app">
        <aside class="form">
            ${getTemplateDesignHTML()}
            ${getPersonalDataHTML()}
            ${getBiographyHTML()}
            ${getExperienceHTML()}
            ${getEducationHTML()}
        </aside>
        <main>
            ${getReviewHTML()}
        </main>
    </div>
`
