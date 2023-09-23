import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <AboutPage/>,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage/>,
      },
      {
        path: '/contact',
        element: <ContactPage/>,
      },
      {
        path: '/resume',
        element: <ResumePage/>,
      }
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
