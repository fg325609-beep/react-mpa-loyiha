import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HomePages.scss';

const partners = ['Finsweet', 'TechCorp', 'InnovateLab', 'BrightIdeas'];
const servicesData = [
  { key: 'design', icon: '🎨' },
  { key: 'development', icon: '⚙️' },
  { key: 'marketing', icon: '📊' },
];
const goalsItems = ['innovation', 'sustainability', 'impact'];
const processSteps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

const HomePages = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero">
        <div className="hero__container">
          <article className="hero__content">
            <h1 className="hero__title">
              {t('hero.title')}
            </h1>
            <p className="hero__subtitle">{t('hero.subtitle')}</p>
            <Link to="/services" className="hero__btn">
              {t('hero.btn')} <span>➔</span>
            </Link>
          </article>
          <figure className="hero__image">
            <img src="/img/Image.png" alt="Office workspace with team members discussing around table" />
          </figure>
        </div>
      </section>

      <section className="partners">
        <div className="partners__container">
          <p className="partners__title">{t('partners.title')}</p>
          <ul className="partners__grid">
            {partners.map((partner) => (
              <li className="partners__item" key={partner}>
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about">
        <div className="about__container">
          <article className="about__left">
            <span className="section__tag">{t('about.tag')}</span>
            <h2 className="about__title">{t('about.title')}</h2>
            <p className="about__text">{t('about.desc')}</p>
            <figure className="about__images">
              <div className="about__img-main">
                <img src="/img/sectiontwo.png" alt="Team meeting around long table" />
              </div>
              <div className="about__img-side">
                <div className="about__img-sm">
                  <img src="/img/sectiontwo-2.png" alt="Smiling woman and man" />
                </div>
                <div className="about__img-sm">
                  <img src="/img/sectiontwo-3.png" alt="Girl working in office" />
                </div>
              </div>
            </figure>
            <dl className="about__stats">
              <div className="about__stat-item">
                <dt className="about__stat-number">1560+</dt>
                <dd className="about__stat-label">{t('about.stats.projects_label')}</dd>
              </div>
              <div className="about__stat-item">
                <dt className="about__stat-number">100+</dt>
                <dd className="about__stat-label">{t('about.stats.clients_label')}</dd>
              </div>
              <div className="about__stat-item">
                <dt className="about__stat-number">950+</dt>
                <dd className="about__stat-label">{t('about.stats.experience_label')}</dd>
              </div>
              <div className="about__stat-item">
                <dt className="about__stat-number">10+</dt>
                <dd className="about__stat-label">{t('about.stats.awards_label')}</dd>
              </div>
            </dl>
          </article>
          <aside className="about__right">
            <h3 className="about__right-title">{t('about.right_title') || 'Texnologiya davri'}</h3>
            <figure className="about__right-img">
              <img src="/img/ffffff.png" alt="Woman in white suit presenting to team" />
            </figure>
          </aside>
        </div>
      </section>

      <section className="goals">
        <div className="goals__container">
          <header className="goals__content">
            <span className="section__tag">{t('goals.tag')}</span>
            <h2 className="section__title">{t('goals.title')}</h2>
            <p className="goals__desc">{t('goals.desc')}</p>
          </header>
          <ul className="goals__grid">
            {goalsItems.map((item) => (
              <li className="goals__card" key={item}>
                <div className="goals__card-dot"></div>
                <article className="goals__card-text">
                  <h3 className="goals__card-title">{t(`goals.items.${item}.title`)}</h3>
                  <p className="goals__card-desc">{t(`goals.items.${item}.desc`)}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services">
        <div className="services__container">
          <header className="services__header">
            <div>
              <span className="section__tag">{t('services.tag')}</span>
              <h2 className="section__title">{t('services.title')}</h2>
            </div>
            <Link to="/services" className="btn services__header-btn">
              {t('about.btn')} <span>➔</span>
            </Link>
          </header>
          <ul className="services__grid">
            {servicesData.map((service) => (
              <li className="services__card" key={service.key}>
                <div className="services__icon">{service.icon}</div>
                <h3 className="services__card-title">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="services__card-desc">
                  {t(`services.items.${service.key}.desc`)}
                </p>
                <span className="services__card-link">{t('services.read_more') || 'Batafsil o\'qish'} ➔</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="process">
        <div className="process__container">
          <header className="process__header">
            <span className="section__tag">{t('process.tag')}</span>
            <h2 className="section__title">{t('process.title')}</h2>
          </header>
          <ol className="process__grid">
            {processSteps.map((step, index) => (
              <li className="process__card" key={step}>
                <span className="process__step-num">0{index + 1}</span>
                <h3 className="process__card-title">
                  {t(`process.steps.${step}.title`)}
                </h3>
                <p className="process__card-desc">
                  {t(`process.steps.${step}.desc`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__container">
          <article className="testimonials__left">
            <span className="section__tag">{t('testimonials.tag')}</span>
            <h2 className="section__title">{t('testimonials.title')}</h2>
            <ul className="testimonials__avatars">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li className="testimonials__avatar" key={i}>
                  <img
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt={`Client ${i}`}
                  />
                </li>
              ))}
            </ul>
          </article>
          <article className="testimonials__right">
            <blockquote className="testimonials__card">
              <div className="testimonials__quote">"</div>
              <p className="testimonials__text">
                {t('testimonials.items.0.text')}
              </p>
              <footer className="testimonials__author">
                <img
                  className="testimonials__author-img"
                  src="https://i.pravatar.cc/60?img=12"
                  alt={t('testimonials.items.0.name')}
                />
                <div>
                  <cite className="testimonials__name">
                    {t('testimonials.items.0.name')}
                  </cite>
                  <span className="testimonials__role">
                    {t('testimonials.items.0.role')}
                  </span>
                </div>
              </footer>
            </blockquote>
          </article>
        </div>
      </section>

      <section className="blog">
        <div className="blog__container">
          <header className="blog__header">
            <span className="section__tag">{t('blog.tag')}</span>
            <h2 className="section__title">{t('blog.title')}</h2>
          </header>
          <ul className="blog__grid">
            <li className="blog__card">
              <figure className="blog__image">
                <img src="/img/sectionfoo.png" alt="Blog 1" />
              </figure>
              <article className="blog__info">
                <time className="blog__date">{t('blog.items.item1.date')}</time>
                <h3 className="blog__card-title">{t('blog.items.item1.title')}</h3>
                <Link to="/" className="blog__link">
                  {t('about.btn')} <span>➔</span>
                </Link>
              </article>
            </li>
            <li className="blog__card">
              <figure className="blog__image">
                <img src="/img/sectionfoo-2.png" alt="Blog 2" />
              </figure>
              <article className="blog__info">
                <time className="blog__date">{t('blog.items.item2.date')}</time>
                <h3 className="blog__card-title">{t('blog.items.item2.title')}</h3>
                <Link to="/" className="blog__link">
                  {t('about.btn')} <span>➔</span>
                </Link>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section className="newsletter" aria-label="Yangiliklarga obuna bo'lish">
        <div className="newsletter__container">
          <div className="newsletter__left">
            <h2 className="newsletter__title">{t('newsletter.title')}</h2>
          </div>
          <div className="newsletter__right">
            <form className="newsletter__form">
              <input
                type="email"
                className="newsletter__input"
                placeholder={t('newsletter.placeholder')}
                required
              />
              <button type="submit" className="newsletter__btn">
                {t('newsletter.btn')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePages;