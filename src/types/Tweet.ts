
export type Tweet = {
    id : string; // UUID
    authorName : string; // nom d'auteur
    authorHandle : string; //nom d'utilisateur sans le caractère @, ajouté uniquement lors de l'affichage
    content : string; // contenu de tweet
    image? : TweetImage;
    createdAt : string //data de format ISO 8601, par exple "2026-07-01T09:12:00.000Z"
}

export type TweetImage = {
    url : string; //
    alt : string // description de l'image
}