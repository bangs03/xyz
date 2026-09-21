import type { JSX } from "react/jsx-runtime"
import { TweetsList } from "../components/TweetsList"
import { tweets } from "../data/tweets"


export const TweetsMasterPage = () : JSX.Element => 
    (<TweetsList tweets={tweets}/>)
