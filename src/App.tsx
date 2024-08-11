// import { useState } from 'react'
import './App.css'
import Aside from './components/Aside'
import MainArticle from './components/MainArticle'

function App() {
  return (
    <>
      <main>
        <Aside/>
        <MainArticle display='n'/>
      </main>
    </>
  )
}

export default App
