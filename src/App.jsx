import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Layout from './components/shared/Layout'
import Events from './pages/Events'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth/login' element={<Login/>} />

      {/* App Routes */}
      <Route path='/app' element={<Layout/>}>
        <Route path='/app/profile' element={<p>This is the profile page</p>}/>
        <Route path='/app/events' element={<Events/>}/>
      </Route>

      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
