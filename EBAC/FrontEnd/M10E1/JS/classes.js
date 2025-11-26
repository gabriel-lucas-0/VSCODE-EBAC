export class Atributes {

    #name;
    #email;

    constructor(name, email) {
        this.#name = name;
        this.#email = email;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email
    }

    isValid() {
        return this.#name !== '' && this.#email !== ''
    }
}