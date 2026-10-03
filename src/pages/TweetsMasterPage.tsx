import type { JSX } from "react/jsx-runtime"
import { TweetsList } from "../components/TweetsList"
// import { initialTweets } from "../data/initialTweets"
import { useContext } from "react"
import { TweetContext } from "../contexts/TweetsContext"


export const TweetsMasterPage = () : JSX.Element => {
    const {tweets} = useContext(TweetContext)!;
    const tweetsMaster = tweets.filter(e => e.parentId === null || e.parentId === undefined);
    return (<TweetsList tweets={tweetsMaster}/>)
    }
