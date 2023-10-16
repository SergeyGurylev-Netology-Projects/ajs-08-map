export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.#initErrorsMap();
  }

  #initErrorsMap() {
    this.errors.set(0, 'Description error 0');
    this.errors.set(1, 'Description error 1');
    this.errors.set(2, 'Description error 2');
    this.errors.set(3, 'Description error 3');
    this.errors.set(4, 'Description error 4');
    this.errors.set(5, 'Description error 5');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }

    return 'Unknown error';
  }
}
