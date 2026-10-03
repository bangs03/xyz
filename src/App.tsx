
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
  const addTweet = (content : string): void =>{
    const newTweet : Tweet = {
      id : crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content: content,
      createdAt: new Date().toISOString(),
      likes : 0,
      likedByMe: false
    }
    setTweets((tweets) => [newTweet, ...tweets])
  }
  const context: TweetContextValue = { tweets, addTweet };

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
