import { startEditor } from './editor';
import './styles/app.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;
const fileInput = <HTMLInputElement>document.getElementById('image-uploader')!;



fileInput.addEventListener('change', () => {
  startEditor(app, fileInput.files!);
});
