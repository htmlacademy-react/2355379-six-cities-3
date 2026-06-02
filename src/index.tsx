import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import setting from './const';


// площадка для монтирования react-элемента , находится в index.html: <div id="root"></div>:
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // запуск отрисовки всего проекта в строгом режиме
  <React.StrictMode>

    <App // запуск корневого компонента App
      offersCount={setting.offersCount}
    />

  </React.StrictMode>,
);
