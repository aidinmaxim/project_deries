import "./App.css"
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import { useEffect, useState } from "react"
import SignIn from "./components/sign-in/SignIn"
import Index from "./components/index/Index"
import Login from "./features/auth/login/Login"
import ShowsList from "./components/showsList/ShowsList"
import ShowDetails from "./components/showDetails/showDetails"

const App = () => {

  const [user, setUser] = useState({ id: '', createdTime: '', email: '', fullname: '', gender: '', plan: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const [triggeredLogout, setTriggeredLogout] = useState(false);

  const saveSession = () => {
    if (sessionStorage.getItem('loggedIn') !== null) {
      return;
    }
    if (sessionStorage.getItem('loggedIn') === null) {
      sessionStorage.setItem('loggedIn', true);
    }
  };

  //
  // //Working with sessions storage every time the website reloads
  // useEffect(() => {
  //   //if use logged in AND login session isn't saved AND logout wasn't triggered THEN save the login session
  //   if (loggedIn && sessionStorage.getItem('loggedIn') === null && !triggeredLogout) {
  //     saveSession();
  //   }
  //   //if user triggered logout AND we have login session in the storage THEN remove this sessions
  //   if (triggeredLogout && sessionStorage.getItem('loggedIn') !== null) {
  //     sessionStorage.removeItem('loggedIn');
  //   }
  //   //there is login session in the storage AND it wasn't the trigger of the logout THEN retrieve the sessions from the storage
  //   if (sessionStorage.getItem('loggedIn') !== null && !triggeredLogout) {
  //     setLoggedIn(sessionStorage.getItem('loggedIn'));
  //   }
  // }, [loggedIn, triggeredLogout]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Index/>}/>
            <Route path='login' element={<Login />}/>
            <Route path='all-tv-shows' element={<ShowsList />}/>
            <Route path='show-details/:permalink' element={<ShowDetails />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
