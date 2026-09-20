import type { JSX } from "react/jsx-runtime";
import type { Tweet } from "../types/Tweet";
import "./TweetPreview.css";

export type TweetPreviewProps = {
    tweet : Tweet
}

export const TweetPreview = ({tweet}: TweetPreviewProps) : JSX.Element =>{
    return (
        <div>
            <h1>{tweet.authorName}</h1>
            <h2>@{tweet.authorHandle}</h2>
            <h3>{new Date(tweet.createdAt).toLocaleDateString("fr-FR")}</h3>
            {tweet.image && <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt}/>}
            <p>{tweet.content}</p>
        </div>
    )
}