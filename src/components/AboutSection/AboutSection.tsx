import GlobalSvgSelector from 'assets/icons/GlobalSvgSelector';
import s from './AboutSection.module.scss';

const AboutSection = () => {
  return (
    <section className={s.about}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={`${s.title} animate`}>About Me.</div>
          <div className={`${s.text} animate`}>
            Я Арсенюк Данил, фронтенд-разработчик из Краснодара. В настоящее время учусь в
            Кубанском государственном университете на факультете компьютерных технологий и
            прикладной математики. Сейчас, активно изучаю TypeScript и Next.JS, а также
            все, что связанно с веб-технологиями
          </div>
        </div>
        <div className={s.list_dev}>
          <div className="animate">
            <GlobalSvgSelector id="ts" />
          </div>
          <div className="animate">
            <GlobalSvgSelector id="js" />
          </div>
          <div className="animate">
            <GlobalSvgSelector id="redux" />
          </div>
          <div className="animate">
            <GlobalSvgSelector id="nextjs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
