import { Link } from "../components/Link"

export default function Inicio() {
    return (
        <>
            <div>
                <h1>INICIO</h1>
                <span>
                    {`¡Bienvenido a [Nombre de la Empresa]!

                    En [Nombre de la Empresa], nos dedicamos a [breve descripción de lo que hace la empresa]. Desde [año de fundación], hemos estado comprometidos con [misión o propósito de la empresa]. Ofrecemos [descripción de los productos/servicios ofrecidos] para satisfacer las necesidades de nuestros clientes más exigentes.

                    Nuestra pasión es [descripción de la pasión de la empresa, como innovar, brindar soluciones creativas, etc.]. Con un equipo de expertos en [campo de especialización], estamos aquí para ayudarte a alcanzar tus metas y superar tus expectativas.

                    Explora nuestro sitio para descubrir [aspectos destacados de los productos/servicios] y cómo podemos ayudarte a [beneficio para el cliente]. ¿Listo para empezar? ¡Contáctanos hoy mismo y déjanos ser tu socio en el éxito!`}
                </span>
                <br />
                <br />
                <Link to="/about/es">Ir a sobre nosotros</Link>
            </div>
        </>
    )
}