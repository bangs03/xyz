import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () : ReactElement => (<div>
    <p>Coucou Page introuvable </p>
    <Link to= {"/"}>Retour</Link>
</div>)