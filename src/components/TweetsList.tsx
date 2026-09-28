
import type { JSX } from "react/jsx-runtime"
import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview"

type TweetsListProps = {
    tweets : Array<Tweet>
}

export const TweetsList = ({tweets}: TweetsListProps) : JSX.Element => {
    return(
        <div>
         {/* {tweets.map((tweet) => !tweet.parentId && (<TweetPreview key={tweet.id} tweet={tweet}/>) )} fonction mais mettons un code plus lisible */}
         {tweets.filter((e) => e.parentId === null || e.parentId === undefined).map(tweet => (<TweetPreview key={tweet.id} tweet={tweet}/>))}
        </div>
        )
} 