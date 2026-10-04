
import type { JSX } from "react/jsx-runtime"
import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview"

type TweetsListProps = {
    tweets : Array<Tweet>;
    onToggleLike: (id: string) => void
}

export const TweetsList = ({tweets, onToggleLike}: TweetsListProps) : JSX.Element => {
    return(
        <div>
         {/* {tweets.map((tweet) => !tweet.parentId && (<TweetPreview key={tweet.id} tweet={tweet}/>) )} fonction mais mettons un code plus lisible et on change son emplacement dans tweetMasterPage */}
         {tweets.map(tweet => (<TweetPreview key={tweet.id} tweet={tweet} onToggleLike={onToggleLike}/>))}
        </div>
        )
} 