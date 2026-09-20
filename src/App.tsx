
import './App.css'
import { tweets } from './data/tweets'
import { TweetsList } from './components/TweetsList'

function App() {
  return ( 
    <TweetsList tweets={tweets}/>
   )
}

export default App
