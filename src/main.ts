import { renderEditor } from './editor';
import './styles/app.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;
const fileInput = document.createElement('input');



fileInput.setAttribute('type', 'file');
app.appendChild(fileInput);
fileInput.addEventListener('change', () => {
  renderEditor(app, fileInput.files!);
});
