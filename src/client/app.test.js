import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './app';
import Store from './store';

describe('<App />', () => {

  const text = 'Hello React!';

  test('文字列を表示する', () => {
    const wrapper = render(<App store={new Store(text)}/>);
    expect(wrapper.text()).toBe(text);
  });

  test('文字列が変化する', () => {
    const store = new Store(text);
    const wrapper = mount(<App store={store}/>);
    expect(wrapper.text()).toBe(text);

    const changedText = 'changed!';
    store.setData(changedText);
    expect(wrapper.text()).toBe(changedText);
  });
})
