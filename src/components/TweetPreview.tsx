import type { JSX } from "react/jsx-runtime";
import type { Tweet } from "../types/Tweet";
import "./TweetPreview.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const max_length = 180;
export type TweetPreviewProps = {
    tweet: Tweet;
    linkToDetail?: boolean;
    onToggleLike: (id: string) => void
}

export const TweetPreview = ({ tweet, linkToDetail = true, onToggleLike }: TweetPreviewProps): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false);
    const islong = tweet.content.length > max_length;
    const afficheContent =
        islong && !isExpanded
            ? tweet.content.slice(0, max_length) + "..." :
            tweet.content;
    const lien = "/tweets/" + tweet.id;
    const initiales = tweet.authorName
        .split(" ")
        .map(mot => mot[0])
        .join("")
        .slice(0, 2);

    return (
        <article className="tweet">
            <div className="tweet-avatar">{initiales}</div>
            <div className="tweet-body">
                <div className="tweet-header">
                    <span className="tweet-author">{tweet.authorName}</span>
                    <span className="tweet-meta">@{tweet.authorHandle}</span>
                    <span className="tweet-meta">
                        {new Date(tweet.createdAt).toLocaleString("fr-FR", {
                            dateStyle: "long",
                            timeStyle: "short",
                        })}
                    </span>
                </div>
                {tweet.image && (linkToDetail
                    ? <Link to={lien}><img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} /></Link>
                    : <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />)}
                <p>{afficheContent}</p>
                {islong && (
                    <button type="button" onClick={() => setIsExpanded(e => !e)}>
                        {isExpanded ? "Voir moins" : "Voir plus"}
                    </button>
                )}
                <div>
                    <button
                        type="button"
                        className={tweet.likedByMe ? "like-button liked" : "like-button"}
                        onClick={() => onToggleLike(tweet.id)}
                    >
                        {tweet.likedByMe ? "Je n'aime plus" : "J'aime"} ({tweet.likes})
                    </button>
                </div>
                {linkToDetail && <Link to={lien}>Voir la discussion</Link>}
            </div>
        </article>
    )
}