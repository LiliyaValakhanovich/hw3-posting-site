import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { BrowserRouter } from 'react-router-dom';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { About } from './pages/about';
import { Terms } from './pages/terms';
import { Post } from './pages/post';

const router = createBrowserRouter([
  /*<Routes>
    <Route path="/" element={<App/>} errorElement={<h1>Page was not found</h1>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/post/:id" element={<Post/>}/>
  </Routes>*/
  {
    path: "/start",
    element: <App/>,
    errorElement:<h1>Page was not found</h1>
  },
  {
    path: "/",
    element: <Navigate replace to="/start"/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement:<h1>Page was not found</h1>
  },
  {
    path: "/terms",
    element: <Terms/>,
    errorElement:<h1>Page was not found</h1>
  },
  {
    path: "/post/:id",
    element: <Post/>,
    errorElement:<h1>Page was not found</h1>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


