import { Link, useParams } from "react-router-dom";
// import { initialTweets } from "../data/initialTweets"
import type { JSX } from "react/jsx-runtime";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";
import { useContext } from "react";
import { TweetContext } from "../contexts/TweetsContext";


export const TweetDetailsPage = (): JSX.Element => {
    const {id} = useParams<{ id: string }>(); //renvoie un objet { ... } donc on doit faire la destructuration
    const {tweets, toggleLike} = useContext(TweetContext)!;
    const leTweet = tweets.find(e => e.id === id)
    const lestweets = tweets.filter(e => e.parentId === id)
    if (leTweet == null) {
        return (
            <div>
                <p>Ce tweet n'existe pas </p>
                <Link to={ "/" }>Retour</Link>
            </div>
        )
    }
    return (
        <div>
            <TweetPreview tweet={leTweet} linkToDetail={false} onToggleLike={toggleLike} />
            {lestweets.length !== 0 ?  (<TweetsList tweets={lestweets} onToggleLike={toggleLike} />) : (<><br /><br /><br /><br /><p>La Liste est vide</p></>)}
        </div>
    )
}
