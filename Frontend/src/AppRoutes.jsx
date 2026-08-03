import {BrowserRouter, Routes, Route} from "react-router"
import Login from "./features/auth/Pages/Login"
import Register from "./features/auth/Pages/Register"
import Feed from "./features/post/pages/Feed"

const AppRoutes = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/feed" element={<Feed/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
