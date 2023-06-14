import { Fragment, useState , useContext } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { themeContext } from './Context'
import Home from './components/Home'
import Details from './components/Portfolio/Details'
import Login from './components/Admin/Login'
import { getToken } from './helper/FormHHelper'
import { jwtDecode } from './helper/jwtDecode'
import Dashboard from './components/Admin/dashboard/Dashboard'
import AdminRoute from './Auth/AdminRoute'
import About from './components/Admin/components/about/About'
import Intro from './components/Admin/components/intro/Intro'
import IntroList from './components/Admin/components/intro/IntroList'
import DashboardComponent from './components/Admin/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const token = getToken()
  const tokenDecode = jwtDecode(token)

  return (
    <Fragment>
        <div
          className="App"
          style={{
            background: darkMode ? "var(--bg-dark-blue)" : "var(--bg-white)",
            color: darkMode ? "white" : "black",
            minHeight: '100vh'
          }}
        >
          <BrowserRouter>
            <Toaster position='top-right'/>
            <Routes>
              <Route path='/' element={ <Home/>} />
              <Route path='/project/:id' element={ <Details/>} />
              <Route path='/login' element={ <Login/>} />

              {tokenDecode &&
                <Route path='dashboard' element={ <Dashboard> <AdminRoute/> </Dashboard> } >
                  <Route path='dashboard' element={ <DashboardComponent/>} />
                  <Route path='intro' element={ <Intro/>} />
                  <Route path='intro/list' element={ <IntroList/>} />
                  <Route path='about' element={ <About/>} />
                  <Route path='services' element={ <About/>} />
                  <Route path='skills' element={ <About/>} />
                  <Route path='experience' element={ <About/>} />
                  <Route path='portfolio' element={ <About/>} />
                  <Route path='testimonials' element={ <About/>} />
                  <Route path='contact' element={ <About/>} />
                </Route>
              // ) : (
              //   <Route path='dashboard' element={ <Dashboard> <AdminRoute/> </Dashboard> } >
              //     <Route path='dashboard' element={ <About/>} />
              //     <Route path='intro/list' element={ <IntroList/>} />
              //     <Route path='about' element={ <About/>} />
              //     <Route path='services' element={ <About/>} />
              //     <Route path='skills' element={ <About/>} />
              //     <Route path='experience' element={ <About/>} />
              //     <Route path='portfolio' element={ <About/>} />
              //     <Route path='testimonials' element={ <About/>} />
              //     <Route path='contact' element={ <About/>} />
              //   </Route>
              // )
              }
            </Routes>
          </BrowserRouter>
        </div>
    </Fragment>
  )
}

export default App
