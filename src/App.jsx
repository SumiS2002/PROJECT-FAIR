import {Navigate,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/TokenAuth'



function App() {

  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>
      <Route path='/dashboard' element={isAuthorised?<Dashboard/>:<Navigate to={'/login'}/>}/>
      <Route path='/project' element={isAuthorised?<Project/>:<Navigate to={'/login'}/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
