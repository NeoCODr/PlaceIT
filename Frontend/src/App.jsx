import { useState , useEffect } from 'react'
import { Endbar } from './components/endbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Jobs from './pages/joblist'
import './App.css'
import { Navbar1 } from './components/navbar1'
import { Landingpage } from './pages/landingpage'
import Publiclayout from './layouts/publiclayout'
import Privatelayout from './layouts/privatelayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignInuser from './pages/signinusername'
import Exceplayout from './layouts/exceplayout'
import NotFound from './pages/notfound'
import axios from 'axios';
import Jobdesp from './pages/job'
import Profile from './pages/profile'
import Jobpost from './pages/jobpost'
import Jobdesc from './pages/jobdesc'



function App() {

  const [isLogin ,setisLogin] = useState(localStorage.getItem('isLogin'))

  const changeloginvalue = (val)=>{
    setisLogin(val)
  }





  
  return (
    <>
      {/* <Navbar1 /> */}
      <Routes>
        {/* <Route path='/' element={<Landingpage />}/>
        <Route path='/Jobs' element={<Jobs />}/> */}

        <Route element={<Publiclayout />}>
          <Route path='/' element={isLogin?<Navigate to={'/jobs'} replace/>:<Landingpage />} />
          <Route path='/SignIn' element={isLogin?<Navigate to={'/jobs'} replace/>:<SignIn changeloginvalue={changeloginvalue}/>} />
          <Route path='/SignUp' element={isLogin?<Navigate to={'/jobs'} replace/>:<SignUp />} />
          <Route path='/Username_signin' element={isLogin?<Navigate to={'/jobs'} replace/>:<SignInuser changeloginvalue={changeloginvalue}/>} />
          
        </Route >

        <Route element={<Privatelayout />}>
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/desp' element={<Jobdesp />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/jobpost' element={<Jobpost/>}/>
          <Route path='/jobs/:id' element={<Jobdesc/>}/>

          
          
        </Route>
        <Route element={<Exceplayout />}>
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>


      {/* <Endbar /> */}


    </>
  )


}

export default App
