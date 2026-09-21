// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TweetsMasterPage } from './pages/TweetsMasterPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route index element= {<TweetsMasterPage/>}/>
      <Route path='tweets/:id' element={<TweetDetailsPage/>}/>
      <Route path='*' element = {<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>,
)
