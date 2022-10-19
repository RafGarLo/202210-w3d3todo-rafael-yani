export abstract class Component {
    //constructor(public selector: string, public template: string) {}

    render(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML = template;
        return false;
    }
    renderAdd(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML += template;
        return false;
    }
    renderOuter(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.outerHTML = template;
        return false;
    }
}
