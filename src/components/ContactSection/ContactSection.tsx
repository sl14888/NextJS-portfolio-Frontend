import Link from 'next/link';
import s from './ContactSection.module.scss';

const ContactSection = () => {
  return (
    <section className={s.contact}>
      <div className={s.title}>CONTACT</div>
      <div className={s.subtitle}>Всегда на связи.</div>
      <Link className={s.btn} href="https://t.me/sl333333">
        Написать
      </Link>
    </section>
  );
};

export default ContactSection;
