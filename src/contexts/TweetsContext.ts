import { createContext } from "react";
import type { Tweet } from "../types/Tweet"


export type TweetContextValue = {
    tweets: Array<Tweet>;
    addTweet: (content: string) => void;
    toggleLike: (id: string) => void
}

export const TweetContext = createContext<TweetContextValue | undefined> (undefined,);