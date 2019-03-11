import Store from './store';
import { autorun, observable, when } from "mobx"

describe('store', () => {

  test('値が更新される', done => {
    const store = new Store();
    const str = 'changed';

    when(
      () => !!store.getData(),
      () => {
        const data = store.getData();
        expect(str).toBe(data);
        done();
      }
    );

    store.setData(str);
  });

})
