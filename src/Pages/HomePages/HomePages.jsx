import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.png';
import aboutImage from '../../assets/react.svg';
import './HomePages.scss';

const servicesIcons = {
  design: '🎨',
  development: '⚙️',
  marketing: '📊',
  branding: '💎',
};

const statsData = [
  { key: 'clients', number: '500' },
  { key: 'projects', number: '1200' },
  { key: 'experience', number: '8' },
  { key: 'awards', number: '45' },
];

const HomePages = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <p className="hero__tag">Finsweet</p>
            <h1 className="hero__title">
              {t('hero.title').split('Finsweet')[0]}
              <span>Finsweet</span>
            </h1>
            <p className="hero__subtitle">{t('hero.subtitle')}</p>
            <Link to="/services" className="hero__btn">
              {t('hero.btn')} <span>➔</span>
            </Link>
            <div className="hero__stats">
              <div>
                <div className="hero__stat-number">500+</div>
                <div className="hero__stat-label">{t('hero.stats_clients')}</div>
              </div>
              <div>
                <div className="hero__stat-number">1200+</div>
                <div className="hero__stat-label">{t('hero.stats_projects')}</div>
              </div>
              <div>
                <div className="hero__stat-number">24/7</div>
                <div className="hero__stat-label">{t('hero.stats_support')}</div>
              </div>
            </div>
          </div>
          <div className="hero__image">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about">
        <div className="about__container">
          <div className="about__image">
            <img src={aboutImage} alt="About us" />
          </div>
          <div className="about__content">
            <span className="section__tag">{t('about.tag')}</span>
            <h2 className="section__title">{t('about.title')}</h2>
            <p className="about__text">{t('about.desc')}</p>
            <Link to="/company" className="btn">
              {t('about.btn')} <span>➔</span>
            </Link>
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
          </div>
          <div className="services__grid">
            {['design', 'development', 'marketing', 'branding'].map((service) => (
              <div className="services__card" key={service}>
                <div className="services__icon">{servicesIcons[service]}</div>
                <h3 className="services__card-title">
                  {t(`services.items.${service}.title`)}
                </h3>
                <p className="services__card-desc">
                  {t(`services.items.${service}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats">
        <div className="stats__container">
          <h2 className="stats__title">{t('stats.title')}</h2>
          <div className="stats__grid">
            {statsData.map((stat) => (
              <div className="stats__item" key={stat.key}>
                <div className="stats__number">
                  {stat.number}
                  <span className="stats__plus">+</span>
                </div>
                <div className="stats__label">{t(`stats.${stat.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <span className="section__tag">{t('clients.tag')}</span>
            <h2 className="section__title">{t('clients.title')}</h2>
          </div>
          <div className="testimonials__grid">
            {[0, 1, 2].map((index) => (
              <div className="testimonials__card" key={index}>
                <div className="testimonials__stars">★★★★★</div>
                <p className="testimonials__text">
                  {t(`clients.items.${index}.text`)}
                </p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    {t(`clients.items.${index}.name`).charAt(0)}
                  </div>
                  <div>
                    <div className="testimonials__name">
                      {t(`clients.items.${index}.name`)}
                    </div>
                    <div className="testimonials__role">
                      {t(`clients.items.${index}.role`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">{t('cta.title')}</h2>
          <p className="cta__desc">{t('cta.desc')}</p>
          <Link to="/services" className="btn">
            {t('cta.btn')} <span>➔</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePages;