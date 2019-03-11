import { observable, action, decorate } from "mobx"

class Store {

  constructor(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }
}

decorate(Store, {
  data: observable,
  setData: action,
})

export default Store;
