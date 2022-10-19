export class Task {
    constructor(title, responsible) {
        this.title = title;
        this.responsible = responsible;
        this.isComplete = false;
        this.id = Task.crearId();
    }
    static crearId() {
        return Math.round(Math.random() * 1000000);
    }
}
