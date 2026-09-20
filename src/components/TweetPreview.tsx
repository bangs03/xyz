import type { JSX } from "react/jsx-runtime";
import type { Tweet } from "../types/Tweet";
import "./TweetPreview.css";
import { useState } from "react";
const max_length = 180;
export type TweetPreviewProps = {
    tweet : Tweet
}

export const TweetPreview = ({tweet}: TweetPreviewProps) : JSX.Element =>{
    const [isExpanded, setIsExpanded] =useState(false);
    const islong = tweet.content.length> max_length;
    const afficheContent = 
        islong && !isExpanded
        ? tweet.content.slice(0, max_length) +"..." :
        tweet.content;
    
    return (
        <div>
            <h1>{tweet.authorName}</h1>
            <h2>@{tweet.authorHandle}</h2>
            <h3>{new Date(tweet.createdAt).toLocaleDateString("fr-FR")}</h3>
            {tweet.image && <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt}/>}
            <p>{afficheContent}</p>
            {islong && <button type="button" onClick={() => setIsExpanded(e => !e)}>
                {isExpanded ? "Voir moins" : "Voir plus"}</button>}
        </div>
    )
}