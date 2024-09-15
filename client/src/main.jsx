import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import SingleBlog from './pages/blogs/SingleBlog.jsx';
import Auth from './components/Auth.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about", 
        element: <About/>
      },
      {
        path: "/blogs/:id",
        element: <ProtectedRoute element={<SingleBlog />} />, // Wrap SingleBlog with ProtectedRoute
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
