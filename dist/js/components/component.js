export class Component {
    //constructor(public selector: string, public template: string) {}
    render(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML = template;
        return false;
    }
    renderAdd(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML += template;
        return false;
    }
    renderOuter(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.outerHTML = template;
        return false;
    }
}
