import { Link, navigate } from "../components/Link";
import { useState } from "react"

export default function SobreNosotros({ routeParams }) {
    const [juancarlos, setJuancarlos] = useState("en")
    const lang = routeParams.lang;
    
    const onClick = (e) => {
        e.preventDefault();

        juancarlos === "es" ? setJuancarlos("en") : setJuancarlos("es")
        console.log(lang, juancarlos)
        navigate("/about/" + juancarlos)
    }

    return (
        <>
            <div className="about">
                <header>
                    <h1>
                        { lang == 'es' ? (
                                "SOBRE NOSOTROS"
                            ) : lang == 'en' ? (
                                "ABOUT US"
                            ) : null
                        }
                    </h1>
                    <a onClick={onClick}>{lang === "es" ? "EN" : "ES"}</a>
                </header>
                <span>
                    {lang == 'es' ? (
                        `Bienvenidos a [Nombre de la Empresa], tu destino para [breve descripción de lo que ofrece la empresa]. Fundada en [año de fundación], nuestra empresa ha estado comprometida con [misión o propósito de la empresa]. Nos enorgullece ofrecer a nuestros clientes [descripción de los productos/servicios ofrecidos] de la más alta calidad.

                        En [Nombre de la Empresa], creemos en [valores de la empresa, como la calidad, la excelencia, el servicio al cliente, etc.]. Nos esforzamos por [objetivos de la empresa, como satisfacer las necesidades de nuestros clientes, innovar constantemente, contribuir a la comunidad, etc.].
                        
                        Nuestro equipo está formado por [descripción del equipo, como expertos en la industria, apasionados por lo que hacen, comprometidos con la excelencia, etc.]. Nos dedicamos a proporcionar a nuestros clientes una experiencia excepcional, desde el primer contacto hasta después de la compra.
                        
                        En [Nombre de la Empresa], valoramos la satisfacción del cliente sobre todo. Nos esforzamos por garantizar que cada interacción con nuestra empresa sea positiva y memorable. Creemos en establecer relaciones sólidas y duraderas con nuestros clientes, basadas en la confianza, la transparencia y la integridad.
                        
                        Gracias por elegir [Nombre de la Empresa]. Estamos emocionados de acompañarte en tu viaje hacia [objetivo o beneficio para el cliente]. No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o necesitas ayuda. ¡Esperamos poder servirte pronto!`
                    ) : lang == 'en' ? (
                        `Welcome to [Company Name], your destination for [brief description of what the company offers]. Founded in [founding year], our company has been committed to [mission or purpose of the company]. We take pride in offering our customers [description of products/services offered] of the highest quality.

                        At [Company Name], we believe in [company values, such as quality, excellence, customer service, etc.]. We strive to [company goals, such as meeting our customers' needs, innovating constantly, contributing to the community, etc.].

                        Our team consists of [team description, such as industry experts, passionate about what they do, committed to excellence, etc.]. We are dedicated to providing our customers with an exceptional experience, from the first contact to after the purchase.

                        At [Company Name], we value customer satisfaction above all. We endeavor to ensure that every interaction with our company is positive and memorable. We believe in establishing strong, lasting relationships with our customers, based on trust, transparency, and integrity.

                        Thank you for choosing [Company Name]. We are excited to accompany you on your journey to [customer benefit or goal]. Please feel free to contact us if you have any questions or need assistance. We look forward to serving you soon!`
                    ) : null}
                </span>
                <br />
                <br />
                <Link to="/">Ir a home</Link>
            </div>
        </>
    )
}