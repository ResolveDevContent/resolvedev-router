import { navigate } from "../components/Link";
import { useState } from "react"

export default function Inicio({ routeParams }) {
    const [juancarlos, setJuancarlos] = useState("en")
    const lang = routeParams.lang;

    const onClick = (e) => {
        e.preventDefault();

        juancarlos === "es" ? setJuancarlos("en") : setJuancarlos("es")
        navigate("/" + juancarlos)
    }

    return (
        <>
            <div className="about">
                <header>
                    <h1>
                        { lang == 'es' ? (
                                "INICIO"
                            ) : lang == 'en' ? (
                                "HOME"
                            ) : null
                        }
                    </h1>
                    <a onClick={onClick}>{lang === "es" ? "EN" : "ES"}</a>
                </header>
                <span>
                {lang == 'es' ? (
                        `¡Bienvenido a [Nombre de la Empresa]!

                        En [Nombre de la Empresa], nos dedicamos a [breve descripción de lo que hace la empresa]. Desde [año de fundación], hemos estado comprometidos con [misión o propósito de la empresa]. Ofrecemos [descripción de los productos/servicios ofrecidos] para satisfacer las necesidades de nuestros clientes más exigentes.
                        
                        Nuestra pasión es [descripción de la pasión de la empresa, como innovar, brindar soluciones creativas, etc.]. Con un equipo de expertos en [campo de especialización], estamos aquí para ayudarte a alcanzar tus metas y superar tus expectativas.
                        
                        Explora nuestro sitio para descubrir [aspectos destacados de los productos/servicios] y cómo podemos ayudarte a [beneficio para el cliente]. ¿Listo para empezar? ¡Contáctanos hoy mismo y déjanos ser tu socio en el éxito!`
                    ) : lang == 'en' ? (
                        `Welcome to [Company Name]!

                        At [Company Name], we specialize in [brief description of what the company does]. Since [founding year], we have been committed to [mission or purpose of the company]. We offer [description of products/services offered] to meet the needs of our most demanding customers.
                        
                        Our passion is [description of the company's passion, such as innovating, providing creative solutions, etc.]. With a team of experts in [field of specialization], we are here to help you achieve your goals and exceed your expectations.
                        
                        Explore our site to discover [highlights of the products/services] and how we can help you [customer benefit]. Ready to get started? Contact us today and let us be your partner in success!`
                    ) : null}
                </span>
            </div>
        </>
    )
}