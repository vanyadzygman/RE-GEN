import { getFormHTML } from './components/form';
import { getHeaderHTML } from './components/header';
import './styles/main.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${getHeaderHTML()}
    <div class="app">
        ${getFormHTML()}
    </div>
`
