import React from 'react';
import {render} from 'react-dom';
import { observer, inject, Provider } from "mobx-react"

class TextDisplay extends React.Component {
  render () {
    const { strText } = this.props;
    return <div>{strText}</div>;
  }
}

TextDisplay = inject(stores => ({
  strText: stores.textDisplayStore.getData()
}))(TextDisplay);

class App extends React.Component {
  render () {
    const { store } = this.props;
    return (
      <Provider textDisplayStore={store}>
        <TextDisplay />
      </Provider>
    )
  }
}

export default App;
