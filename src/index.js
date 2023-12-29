import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { About } from './pages/about';
import { Terms } from './pages/terms';
import { Post } from './pages/post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/terms",
    element: <Terms/>
  },
  {
    path: "/post/:id",
    element: <Post/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


