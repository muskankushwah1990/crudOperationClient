import { useState } from 'react'
import './App.css'
import AddUser from './components/AddUser'
import { Route, Routes } from 'react-router-dom'
import Display from './components/Display'
import ViewUser from './components/ViewUser'
import EditUser from './components/EditUser'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/insertUser' element={<AddUser />} />
      <Route path='/' element={<Display />} />
      <Route path='/viewUser/:id' element={<ViewUser />} />
      <Route path='/editUser/:id' element={<EditUser />} />
    </Routes>
    <Toaster />
    
    </>
  )
}

export default App
