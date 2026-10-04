import type { JSX } from "react/jsx-runtime"
import { TweetsList } from "../components/TweetsList"
// import { initialTweets } from "../data/initialTweets"
import { useContext } from "react"
import { TweetContext } from "../contexts/TweetsContext"
import { TweetForm } from "../components/TweetForm"
import { useDocumentTitle } from "../hooks/useDocumentTitle"


export const TweetsMasterPage = (): JSX.Element => {
    const { tweets, addTweet, toggleLike} = useContext(TweetContext)!;
    const tweetsMaster = tweets.filter(e => e.parentId === null || e.parentId === undefined);
    const nombre = tweetsMaster.map((e)=> e.likes);
    const total = nombre.reduce((som,n) => som+n, 0);
    useDocumentTitle("Accueil")
    return (
        <>
            <TweetForm onSubmit={addTweet} />
            <TweetsList tweets={tweetsMaster} onToggleLike={toggleLike} />
            <p>Total : {total} J'aime </p>
        </>)
}
