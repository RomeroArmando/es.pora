import { storeData } from './data';
import './App.scss';

function App() {
  const { hasStock, contacts, description, instagramHandle, instagramUrl } = storeData;

  return (
    <div className="container">
      <main className="layout-grid">

        {/* COLUMNA IZQUIERDA (Info y Contactos) */}
        <section className="column-info">
          <div className="status-section">
            <h2>Estado del stock:</h2>
            <div className={`status-badge ${hasStock ? 'in-stock' : 'out-of-stock'}`}>
              {hasStock ? '¡TENEMOS STOCK!' : 'SIN STOCK ACTUALMENTE'}
            </div>
          </div>

          <div className="contact-section">
            <h3>Comunicate con nosotros</h3>
            <p>Hacé clic en un número para abrir WhatsApp:</p>

            <div className="contact-list">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-number">{contact.displayPhone}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* COLUMNA DERECHA (Presentación) */}
        <section className="column-presentation">
          <img
            src="/logo.png"
            alt="Es.porã - Venta de Hongos Comestibles"
            className="brand-logo"
          />

          <div className="about-us">
            <p>{description}</p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            Seguinos en Instagram <strong>{instagramHandle}</strong>
          </a>
        </section>

      </main>

      <footer className="dev-footer">
        <div className="footer-content">
          <p>Powered by</p>
          <a
            href="https://www.instagram.com/work.progress1/" // <-- Colocá acá el link real a tu perfil de WIP
            target="_blank"
            rel="noopener noreferrer"
            className="wip-link"
          >
            <img
              src="/wip_logo.png"
              alt="WIP Development"
              className="wip-signature-img"
            />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;