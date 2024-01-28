import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import MainVideo from './components/MainVideo.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/watch',
        element: <MainVideo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  // </React.StrictMode>
);
