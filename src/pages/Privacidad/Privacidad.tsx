import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from '../../components/Logo/Logo'
import styles from './Privacidad.module.css'

// Fecha de la última actualización de esta política
const ACTUALIZADA = '22 de noviembre de 2026'
const CONTACTO = 'andy202ochoa@gmail.com'

export default function Privacidad() {
  return (
    <main className={styles.pagina}>
      <header className={styles.barra}>
        <Link to="/" aria-label="Volver a la portada">
          <Logo />
        </Link>
        <Link to="/" className={styles.volver}>
          <ArrowLeft size={16} /> Volver
        </Link>
      </header>

      <article className={styles.contenido}>
        <h1>Política de Privacidad</h1>
        <p className={styles.fecha}>Última actualización: {ACTUALIZADA}</p>

        <p className={styles.aviso}>
          NEXAPAY es un <strong>proyecto académico de simulación financiera</strong>. Todos los
          saldos y operaciones usan <strong>fondos ficticios</strong>: no se mueve dinero real y
          nunca te pedimos datos bancarios ni de tarjetas.
        </p>

        <section>
          <h2>1. Qué datos guardamos</h2>
          <ul>
            <li>
              <strong>Datos de tu cuenta:</strong> nombre, correo electrónico y un número de cuenta
              de 8 dígitos que se genera al registrarte.
            </li>
            <li>
              <strong>Contraseña:</strong> se guarda cifrada (hash con bcrypt). Nadie, ni siquiera
              nosotros, puede leerla.
            </li>
            <li>
              <strong>Inicio de sesión con Google:</strong> si lo usás, recibimos de Google tu
              nombre, tu correo y un identificador de tu cuenta de Google. No accedemos a tu correo,
              contactos ni archivos.
            </li>
            <li>
              <strong>Actividad en la billetera:</strong> saldos ficticios por moneda, depósitos,
              conversiones, transferencias, comisiones y espacios de ahorro.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Para qué los usamos</h2>
          <ul>
            <li>Crear tu cuenta, identificarte y mantener tu sesión iniciada.</li>
            <li>Mostrarte tus saldos, tu historial y permitirte operar en la simulación.</li>
            <li>Enviarte un correo de bienvenida al registrarte.</li>
            <li>Responder tus preguntas en el asistente NEXAPAY AI.</li>
          </ul>
          <p>No vendemos ni compartimos tus datos con fines publicitarios.</p>
        </section>

        <section>
          <h2>3. Servicios de terceros</h2>
          <p>Para funcionar, NEXAPAY usa estos proveedores:</p>
          <ul>
            <li>
              <strong>Vercel:</strong> aloja la aplicación.
            </li>
            <li>
              <strong>Neon:</strong> aloja la base de datos PostgreSQL donde se guarda tu cuenta.
            </li>
            <li>
              <strong>Google:</strong> inicio de sesión con Google (si lo usás) y el modelo Gemini
              del asistente NEXAPAY AI. Cuando le escribís al asistente, se envía a Gemini tu mensaje
              junto con tu saldo total y tus últimos movimientos ficticios, para que pueda
              responderte.
            </li>
            <li>
              <strong>Amazon Web Services (SES):</strong> envío del correo de bienvenida.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies y almacenamiento en tu navegador</h2>
          <ul>
            <li>
              Usamos una <strong>cookie de sesión</strong> (HttpOnly y segura) para mantenerte
              conectado. Vence a las 24 horas o al cerrar sesión.
            </li>
            <li>
              Guardamos tus datos básicos de usuario en el almacenamiento del navegador para mostrar
              tu nombre. Si no marcás «Recordarme», se borran al cerrar la pestaña.
            </li>
            <li>No usamos cookies de publicidad ni de seguimiento.</li>
          </ul>
        </section>

        <section>
          <h2>5. Seguridad</h2>
          <p>
            Las conexiones viajan cifradas (HTTPS), las contraseñas se guardan con hash y las
            claves de los servicios externos solo existen en el servidor. Aun así, al ser un
            proyecto académico, te recomendamos no usar una contraseña que utilices en otros sitios.
          </p>
        </section>

        <section>
          <h2>6. Tus derechos</h2>
          <p>
            Podés pedir que te mostremos, corrijamos o eliminemos tu cuenta y todos sus datos
            escribiendo a <a href={`mailto:${CONTACTO}`}>{CONTACTO}</a>.
          </p>
        </section>

        <section>
          <h2>7. Cambios en esta política</h2>
          <p>
            Si cambiamos esta política, actualizaremos la fecha de arriba. Te recomendamos revisarla
            de vez en cuando.
          </p>
        </section>

        <section>
          <h2>8. Contacto</h2>
          <p>
            ¿Dudas sobre tu privacidad? Escribinos a{' '}
            <a href={`mailto:${CONTACTO}`}>{CONTACTO}</a>.
          </p>
        </section>
      </article>
    </main>
  )
}
