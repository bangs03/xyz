import type { Tweet } from "../types/Tweet";

export const tweets : Array<Tweet> = [{
    id : "00000000-0000-0000-0000-000000000001",
    authorName : "Izuku Midoria",
    authorHandle : "MHA",
    content : "Je veux devenir le héros qui sauve les gens avec le sourire.",
    createdAt : "2026-05-05T14:12:00.000Z"
},{
    id : "00000000-0000-0000-0000-000000000002",
    authorName : "Light Yagami",
    authorHandle: "deathNote",
    content: "Je vais devenir le dieu du nouveau monde.",
    createdAt: "2026-07-01T09:12:00.000Z"
},{
    id : "00000000-0000-0000-0000-000000000003",
    authorName : "Ada Lovelace",
    authorHandle: "mathematicienne",
    content: "La machine analytique tisse des motifs algébriques comme le métier à tisser Jacquard tisse des fleurs et des feuilles",
    image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
        alt: "Photo de la mathematicienne Ada"
    },
    createdAt: "2026-08-01T09:12:00.000Z"
},{
    id : "00000000-0000-0000-0000-000000000004",
    authorName : "Vegeta",
    authorHandle: "PrinceSaiyan",
    content: "Je préfère mourir plutôt que de continuer à vivre dans l’ombre de quelqu’un d’autre. Je suis le prince des Saiyans, et je me battrai jusqu’au bout pour dépasser mes propres limites et prouver ma valeur.",
    createdAt: "2026-07-01T09:13:50.000Z"
},{
    id : "00000000-0000-0000-0000-000000000005",
    authorName : "Saitama",
    authorHandle: "OnePunchMan",
    content: "Peu importe la difficulté de ton entraînement ou le nombre de fois où tu échoues, si tu continues à avancer sans abandonner, tu finiras forcément par devenir plus fort qu’hier.",
    createdAt: "2026-10-01T09:12:00.000Z"
},{
    id : "00000000-0000-0000-0000-000000000006",
    authorName : "Madara Uchiwa",
    authorHandle: "DieuDesUchiwa",
    content: "Dans ce monde, là où il y a de la lumière, il y a aussi des ombres. Tant qu’il existe des vainqueurs, il y aura aussi des perdants",
    createdAt: "2026-07-25T09:12:00.000Z"
},{
    id : "00000000-0000-0000-0000-000000000007",
    authorName : "Grace Hopper",
    authorHandle: "informaticienne",
    content: "La chose la plus dangereuse à dire est : nous avons toujours fait comme ça.",
    image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
        alt: "photo de l'informaticienne Grace "
    },
    createdAt: "2026-07-01T09:12:30.000Z"
},{
    id : "00000000-0000-0000-0000-000000000008",
    authorName : "Shin",
    authorHandle: "Generale",
    content: "Je deviendrai le plus grand général sous les cieux. Peu importe les obstacles, je continuerai d’avancer.",
    createdAt: "2026-07-11T09:12:00.000Z"
},{
    id : "00000000-0000-0000-0000-000000000009",
    authorName : "Eisei",
    authorHandle: "KingOfChine",
    content: "Je ne veux pas simplement gagner des batailles. Je veux mettre fin au cycle de la guerre et construire un monde dans lequel les générations futures n’auront plus à vivre dans la peur de la guerre.",
    createdAt: "2026-11-01T10:12:00.000Z"
},{
    id : "00000000-0000-0000-0000-000000000010",
    authorName : "All Might",
    authorHandle: "SymboleDeLaPaix",
    content: "N’aie pas peur. Pourquoi ? Parce que je suis là !",
    createdAt: "2026-01-01T00:12:00.000Z"
}]