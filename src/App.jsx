import { storeData } from './data';
import './App.scss';

function App() {
  const { hasStock, contacts } = storeData;

  return (
    <div className="container">
      <header className="header">
        {/* Aquí cargamos tu logo directamente. El 'alt' es por accesibilidad */}
        <img 
          src="/logo.png" 
          alt="Es.porã - Venta de Hongos Comestibles" 
          className="brand-logo" 
        />
      </header>

      <main>
        <section className="status-section">
          <h2>Estado del stock:</h2>
          {/* El estado dinámico sigue igual */}
          <div className={`status-badge ${hasStock ? 'in-stock' : 'out-of-stock'}`}>
            {hasStock ? '¡TENEMOS STOCK!' : 'SIN STOCK ACTUALMENTE'}
          </div>
        </section>

        <section className="contact-section">
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
        </section>
      </main>
    </div>
  );
}

export default App;