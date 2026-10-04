import type { JSX } from "react/jsx-runtime";
import type { Tweet } from "../types/Tweet";
import "./TweetPreview.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const max_length = 180;
export type TweetPreviewProps = {
    tweet : Tweet;
    linkToDetail?: boolean;
    onToggleLike: (id: string) => void
}

export const TweetPreview = ({tweet, linkToDetail = true, onToggleLike}: TweetPreviewProps) : JSX.Element =>{
    const [isExpanded, setIsExpanded] =useState(false);
    const islong = tweet.content.length> max_length;
    const afficheContent = 
        islong && !isExpanded
        ? tweet.content.slice(0, max_length) +"..." :
        tweet.content;
    const lien = "/tweets/"+tweet.id ;
    return (
        <div>
            {tweet.image && ( linkToDetail ? (<Link to={lien}><img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt}/></Link>) :(<img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt}/>))}
            <h1>{tweet.authorName}</h1>
            <h2>@{tweet.authorHandle}</h2>
            {linkToDetail && <Link to={lien}>Voir la discussion</Link> }
            <h3>{new Date(tweet.createdAt).toLocaleDateString("fr-FR")}</h3>
            <p>{afficheContent}</p>
            {islong && <button type="button" onClick={() => setIsExpanded(e => !e)}>
                {isExpanded ? "Voir moins" : "Voir plus"}</button>}
            <button type="button" onClick={() => onToggleLike(tweet.id)}>{tweet.likedByMe ? "Je n'aime plus" : " J'aime"} </button>
            <span>{tweet.likes}J'aime</span>
        </div>
    )
}