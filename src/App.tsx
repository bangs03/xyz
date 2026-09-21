
import './App.css'
// import { tweets } from './data/tweets'
// import { TweetsList } from './components/TweetsList'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header />
      <main>
        <Outlet />
        {/* <TweetsList tweets={tweets} /> */}
      </main>
    </>
  )
}

export default App
