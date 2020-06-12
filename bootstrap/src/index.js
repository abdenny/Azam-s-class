import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './Layout/BaseLayout.layout';

ReactDOM.render(
  <React.StrictMode>
    <BaseLayout>
      <App />
    </BaseLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
