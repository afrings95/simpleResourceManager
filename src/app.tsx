import { Provider } from 'mobx-react';
import React from 'react';
import ReactDom from 'react-dom';
import { MainPage } from './pages/main/MainPage';
import { TranslatePage } from './pages/translate/TranslatePage';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

function App() {
  return (
    <div className='App'>
      <Provider>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;

ReactDom.render(<App />, mainElement);
