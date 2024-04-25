import { Link } from "../components/Link"

export default function SobreNosotros({ routeParams }) {
    console.log(routeParams.lang)
    
    return (
        <>
            <div>
                <h1>ABOUT</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis facere est natus inventore error. Laborum eos asperiores laboriosam nemo quis deserunt corrupti dolor unde. Laboriosam iusto hic saepe natus?</span>
                <br />
                <br />
                <Link to="/">Ir a home</Link>
            </div>
        </>
    )
}