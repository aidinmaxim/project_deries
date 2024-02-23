import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Index from "./components/index/Index"
import Login from "./features/auth/login/Login"
import ShowsList from "./components/showsList/ShowsList"
import ShowDetails from "./components/showDetails/showDetails"

const App = () => {

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
