class Service {

    constructor(){
        this.repo = {}
    }

    get(name) {
        return this.repo[name];
    }

    set(name, funcs) {
        this.repo[name] = funcs;
    }
}

export const services = new Service();