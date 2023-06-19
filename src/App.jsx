import React from 'react';
import Main from './layout/main';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/routers';

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;