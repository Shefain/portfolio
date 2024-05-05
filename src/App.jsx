import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

//layouts
import RootLayout from './Layout/RootLayout';
import LoginLayout from './Layout/LoginLayout';

// pages
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Skill from './Pages/Skill';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import ResumeLayout from './Layout/ResumeLayout';
import NotFound from './Pages/NotFound';

function App() {
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Define routes inside RootLayout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skill" element={<Skill />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='*' element={<NotFound/>}/>
          
        </Route>
          <Route path='resume' element={<ResumeLayout/>}> 
            <Route index element={<Resume/>}/>
          </Route>

        {/* Define separate route for login page */}
         <Route path="/login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
      </>
    )
  );

      
  return <RouterProvider router={route} />;
}

export default App;



