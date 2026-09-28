import type { JSX } from "react/jsx-runtime"
import { TweetsList } from "../components/TweetsList"
import { tweets } from "../data/tweets"


export const TweetsMasterPage = () : JSX.Element => {
    const tweetsMaster = tweets.filter(e => e.parentId === null || e.parentId === undefined);
    return (<TweetsList tweets={tweetsMaster}/>)
    }
