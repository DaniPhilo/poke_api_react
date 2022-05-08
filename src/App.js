import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Create from './Create'
import Detail from './Detail'

function App() {

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Create />} />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </main>
    </>
  )
}

export default App