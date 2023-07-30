export default class Team {
  constructor(obj) {
    this.obj = obj;
  }

  * [Symbol.iterator]() {
    for (const member of this.obj) {
      yield member;
    }
  }
}
