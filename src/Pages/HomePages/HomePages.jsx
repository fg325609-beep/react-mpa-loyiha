import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.png';
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
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              {t('hero.title')}
            </h1>
            <p className="hero__subtitle">{t('hero.subtitle')}</p>
            <Link to="/services" className="hero__btn">
              {t('hero.btn')} <span>➔</span>
            </Link>
          </div>
          <div className="hero__image">
            <img src={heroImage} alt="Office workspace with team members discussing around table" />
          </div>
        </div>
      </section>

      {/* ===== Partners Section ===== */}
      <section className="partners">
        <div className="partners__container">
          <p className="partners__title">{t('partners.title')}</p>
          <div className="partners__grid">
            {partners.map((partner) => (
              <div className="partners__item" key={partner}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about">
        <div className="about__container">
          <div className="about__left">
            <span className="section__tag">{t('about.tag')}</span>
            <h2 className="about__title">{t('about.title')}</h2>
            <p className="about__text">{t('about.desc')}</p>
            <div className="about__images">
              <div className="about__img-main">
                <img src="https://placehold.co/600x250/1c1e22/ffd2a4?text=Team+Meeting+Around+Table" alt="Team meeting around long table" />
              </div>
              <div className="about__img-side">
                <div className="about__img-sm">
                  <img src="https://placehold.co/280x180/23252b/ffd2a4?text=Smiling+Team" alt="Smiling woman and man" />
                </div>
                <div className="about__img-sm">
                  <img src="https://placehold.co/280x180/23252b/ffd2a4?text=Office+Worker" alt="Girl working in office" />
                </div>
              </div>
            </div>
            <div className="about__stats">
              <div className="about__stat-item">
                <span className="about__stat-number">{t('about.stats.projects')}</span>
                <span className="about__stat-label">{t('about.stats.projects_label')}</span>
              </div>
              <div className="about__stat-item">
                <span className="about__stat-number">{t('about.stats.clients')}</span>
                <span className="about__stat-label">{t('about.stats.clients_label')}</span>
              </div>
              <div className="about__stat-item">
                <span className="about__stat-number">{t('about.stats.experience')}</span>
                <span className="about__stat-label">{t('about.stats.experience_label')}</span>
              </div>
              <div className="about__stat-item">
                <span className="about__stat-number">{t('about.stats.awards')}</span>
                <span className="about__stat-label">{t('about.stats.awards_label')}</span>
              </div>
            </div>
          </div>
          <div className="about__right">
            <h3 className="about__right-title">{t('about.right_title') || 'Texnologiya davri'}</h3>
            <div className="about__right-img">
              <img src="https://placehold.co/500x400/23252b/ffd2a4?text=Woman+Presenting+at+Meeting" alt="Woman in white suit presenting to team" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Goals Section ===== */}
      <section className="goals">
        <div className="goals__container">
          <div className="goals__content">
            <span className="section__tag">{t('goals.tag')}</span>
            <h2 className="section__title">{t('goals.title')}</h2>
            <p className="goals__desc">{t('goals.desc')}</p>
          </div>
          <div className="goals__grid">
            {goalsItems.map((item, index) => (
              <div className="goals__card" key={item}>
                <div className="goals__card-dot"></div>
                <div className="goals__card-text">
                  <h3 className="goals__card-title">{t(`goals.items.${item}.title`)}</h3>
                  <p className="goals__card-desc">{t(`goals.items.${item}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="services">
        <div className="services__container">
          <div className="services__header">
            <div>
              <span className="section__tag">{t('services.tag')}</span>
              <h2 className="section__title">{t('services.title')}</h2>
            </div>
            <Link to="/services" className="btn services__header-btn">
              {t('about.btn')} <span>➔</span>
            </Link>
          </div>
          <div className="services__grid">
            {servicesData.map((service) => (
              <div className="services__card" key={service.key}>
                <div className="services__icon">{service.icon}</div>
                <h3 className="services__card-title">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="services__card-desc">
                  {t(`services.items.${service.key}.desc`)}
                </p>
                <span className="services__card-link">{t('services.read_more') || 'Batafsil o\'qish'} ➔</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process Section ===== */}
      <section className="process">
        <div className="process__container">
          <div className="process__header">
            <span className="section__tag">{t('process.tag')}</span>
            <h2 className="section__title">{t('process.title')}</h2>
          </div>
          <div className="process__grid">
            {processSteps.map((step, index) => (
              <div className="process__card" key={step}>
                <div className="process__step-num">0{index + 1}</div>
                <h3 className="process__card-title">
                  {t(`process.steps.${step}.title`)}
                </h3>
                <p className="process__card-desc">
                  {t(`process.steps.${step}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__left">
            <span className="section__tag">{t('testimonials.tag')}</span>
            <h2 className="section__title">{t('testimonials.title')}</h2>
            <div className="testimonials__avatars">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="testimonials__avatar" key={i}>
                  <img
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt={`Client ${i}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="testimonials__right">
            <div className="testimonials__card">
              <div className="testimonials__quote">"</div>
              <p className="testimonials__text">
                {t('testimonials.items.0.text')}
              </p>
              <div className="testimonials__author">
                <img
                  className="testimonials__author-img"
                  src="https://i.pravatar.cc/60?img=12"
                  alt={t('testimonials.items.0.name')}
                />
                <div>
                  <div className="testimonials__name">
                    {t('testimonials.items.0.name')}
                  </div>
                  <div className="testimonials__role">
                    {t('testimonials.items.0.role')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Blog Section ===== */}
      <section className="blog">
        <div className="blog__container">
          <div className="blog__header">
            <span className="section__tag">{t('blog.tag')}</span>
            <h2 className="section__title">{t('blog.title')}</h2>
          </div>
          <div className="blog__grid">
            {['item1', 'item2'].map((item) => (
              <div className="blog__card" key={item}>
                <div className="blog__image">
                  <img
                    src={`https://placehold.co/500x300/23252b/ffd2a4?text=Blog+${item.slice(-1)}`}
                    alt={t(`blog.items.${item}.title`)}
                  />
                </div>
                <div className="blog__info">
                  <span className="blog__date">{t(`blog.items.${item}.date`)}</span>
                  <h3 className="blog__card-title">{t(`blog.items.${item}.title`)}</h3>
                  <Link to="/" className="blog__link">
                    {t('about.btn')} <span>➔</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Newsletter Section ===== */}
      <section className="newsletter">
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