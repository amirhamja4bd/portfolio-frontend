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

function App() {
  const [count, setCount] = useState(0)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const token = getToken()
  const tokenDecode = jwtDecode(token)
  console.log('tokenDecode', tokenDecode)

  return (
    <Fragment>
        <div
          className="App"
          style={{
            background: darkMode ? "var(--bg-dark-blue)" : "var(--bg-white)",
            color: darkMode ? "white" : "black",
          }}
        >
          <BrowserRouter>
            <Toaster position='top-right'/>
            <Routes>
              <Route path='/' element={ <Home/>} />
              <Route path='/project/:id' element={ <Details/>} />
              <Route path='/login' element={ <Login/>} />
              <Route path='/admin' element={ <Dashboard/>} />
              {/* {tokenDecode?.role === 0 && (
                <Route>
                  <Route path='/' element={ <Home/>} />
                </Route>
              )} */}
              {/* {tokenDecode?.role === 1 && (
                <Route>
                  <Route path='/admin' element={ <Dashboard/>} />
                </Route>
              )} */}
            </Routes>
          </BrowserRouter>
        </div>
    </Fragment>
  )
}

export default App
