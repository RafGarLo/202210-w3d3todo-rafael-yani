import { Component } from './component.js';
export class ItemTask extends Component {
    constructor(selector, item, handleDelete) {
        super();
        this.selector = selector;
        this.item = item;
        this.handleDelete = handleDelete;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#i${this.item.id}`).addEventListener('click', () => {
                this.handleDelete(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `
        <li> 
        <input type="checkbox" checked="${this.item.isComplete ? 'checked' : ''}">
            <span> ${this.item.id}</span>
            <span> ${this.item.title}</span>
            <span class ="button" id="i${this.item.id}" >🗑️</span>
        </li>`;
    }
}
