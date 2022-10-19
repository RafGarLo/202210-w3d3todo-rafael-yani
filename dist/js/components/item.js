import { Component } from './component.js';
export class Item extends Component {
    constructor(selector, handle) {
        super();
        this.selector = selector;
        this.handle = handle;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            document.querySelectorAll('.eraser').forEach((item) => item.addEventListener('click', (ev) => {
                ev.preventDefault();
                handle(ev);
            }));
        }, 100);
    }
    createTemplate() {
        return `
        <form>
            <div>
                <input type="text" id="title" placeholder="Cuál es la tarea" required>
            </div>
            <div>
                <input type="text" id="resp" placeholder="Quien es el responsable">
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
