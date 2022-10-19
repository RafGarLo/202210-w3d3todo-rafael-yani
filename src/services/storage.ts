
export class Store<T> {
    constructor(public store: string = 'Tasks') {}

getStore (): Array<any> {
    const dataString = localStorage.getItem(this.store)
    if(!dataString) return []
return JSON.parse(dataString)
}

setStore(data: Array<any>) {
localStorage.setItem(this.store, JSON.stringify(data)
}
}
