import { Link } from "../components/Link"

export default function SobreNosotros({ routeParams }) {
    console.log(routeParams.lang)
    
    return (
        <>
            <div>
                <h1>Bienvenido a la About</h1>
                <Link to="/">Ir a home</Link>
            </div>
        </>
    )
}