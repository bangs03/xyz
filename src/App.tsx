
import './App.css'
import { useState } from "react"
// import { tweets } from './data/tweets'
// import { TweetsList } from './components/TweetsList'
import { Outlet } from 'react-router-dom'
import type { Tweet } from './types/Tweet'
import { initialTweets } from './data/initialTweets'
import { TweetContext, type TweetContextValue } from './contexts/TweetsContext'

function App() {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);
  const context: TweetContextValue = { tweets };
  return (
    <>
      <header />
      <main>
        <TweetContext.Provider value={context}>
          <Outlet />
          {/* <TweetsList tweets={tweets} /> */}
        </TweetContext.Provider>
      </main>
    </>
  )
}

export default App
