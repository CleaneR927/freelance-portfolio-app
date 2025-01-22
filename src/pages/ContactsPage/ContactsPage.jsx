import globals from '../../styles/global.module.css';
import { ContactItem } from '../../ui-kit/ContactItem/ContactItem';

export function ContactsPage() {
  return (
    <main className={globals.section}>
      <div className={globals.container}>
        <h1 className={globals.mainTitle}>Contacts</h1>

        <ul className={globals.contentList}>
          <ContactItem title="Location">Ekaterinburg, Russia</ContactItem>
          <ContactItem title="Telegram / WhatsApp">
            <a href="tel:+79505468371">+7 (950) 546-83-71</a>
          </ContactItem>
          <ContactItem title="Email">
            <a href="mailto:cleanerkerri@gmail.com">cleanerkerri@gmail.com</a>
          </ContactItem>
        </ul>
      </div>
    </main>
  );
}
