import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BasicInfo from './Components/BasicInfo.jsx';
import Summary from './Components/Summary.jsx';
import Skills from './Components/Skills.jsx';
import Experience from './Components/Experience.jsx';
import Achivements from './Components/Achivements.jsx';
import Education from './Components/Education.jsx';
import Projects from './Components/Projects.jsx';
import ResumeGernator from './pages/ResumeGernator.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/basicInfo',
        element:<BasicInfo/>
      },
      {
        path:'/summary',
        element:<Summary/>
      },
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/experience',
        element:<Experience/>
      },
      {
        path:'/projects',
        element:<Projects/>
      },
      {
        path:'/education',
        element:<Education/>
      },
      {
        path:'/achivements',
        element:<Achivements/>
      },
      {
        path:'/resumeGernator',
        element:<ResumeGernator/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
