
import './App.css'
import { useState } from "react"
// import { tweets } from './data/tweets'
// import { TweetsList } from './components/TweetsList'
import logo from "./assets/xyz.png"
import { Link, Outlet } from 'react-router-dom'
import type { Tweet } from './types/Tweet'
import { initialTweets } from './data/initialTweets'
import { TweetContext, type TweetContextValue } from './contexts/TweetsContext'

function App() {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);
  const addTweet = (content: string): void => {
    const newTweet: Tweet = {
      id: crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content: content,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false
    }
    setTweets((tweets) => [newTweet, ...tweets])
  }


  const toggleLike = (id: string): void => {
    setTweets((tweets) => tweets.map((tweet) => {
      if (tweet.id === id) {
        return {
          ...tweet,
          likedByMe: !tweet.likedByMe,
          likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1
        }
      };
      return tweet;
    }))
  }

  const context: TweetContextValue = { tweets, addTweet, toggleLike };

  return (
    <>
      <header className="app-header">
        <Link to="/" className="app-brand">
          <img src={logo} alt="Logo de XYZ" className="app-logo" />
          <span>XYZ</span>
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
        </nav>
      </header>
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
