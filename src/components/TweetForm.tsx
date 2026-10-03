import { useState } from "react"
import type { JSX } from "react/jsx-runtime"
import type {SubmitEvent} from "react"

type TweetFormProps = {
    onSubmit: (content: string) => void
}
const CONTENT_MAX_LENGTH = 280;

export const TweetForm = ({onSubmit} : TweetFormProps): JSX.Element => {
    const [content, setContent] = useState<string>("")
    const CaracterRestant = CONTENT_MAX_LENGTH - content.length;
    const contenuEspaceRetirer = content.trim();
    const desactive = contenuEspaceRetirer.length === 0 || contenuEspaceRetirer.length> CONTENT_MAX_LENGTH;

    const Soumission = (event : SubmitEvent<HTMLFormElement>) : void => {
        event.preventDefault()
        if (desactive) return;
        onSubmit(contenuEspaceRetirer);
        setContent("");
    }

    return(
        <form onSubmit={Soumission}>
            <textarea value={content} onChange={(event) => setContent(event.target.value)}></textarea>
            <p>{CaracterRestant} caractères restants</p>
            <button type="submit" disabled={desactive}>PUBLIER</button>
        </form>
    )
}
