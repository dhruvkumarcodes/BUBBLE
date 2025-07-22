import React from 'react'
import Left from './home/leftpanel/Left.jsx'
import Right from './home/rightpanel/Right.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import { useAuth } from './context/AuthProvider.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            authUser ? <div className='flex h-screen'>
              <Left />
              <Right />
            </div> : <Navigate to={"/login"} />
          } />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login></Login>} />
        </Routes>
        <Toaster />
      </BrowserRouter>


    </>
  )
}

export default App
