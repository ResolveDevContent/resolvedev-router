import { Link } from "../components/Link"

export default function Inicio() {
    return (
        <>
            <div>
                <h1>Bienvenido a la Home</h1>
                <Link to="/about">Ir a about</Link>
            </div>
        </>
    )
}