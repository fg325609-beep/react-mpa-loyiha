import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ServicesPages.scss';

const servicesList = [
  { key: 'design', icon: '🎨' },
  { key: 'development', icon: '⚙️' },
  { key: 'marketing', icon: '📊' },
  { key: 'branding', icon: '💎' },
];

const processSteps = ['step1', 'step2', 'step3', 'step4'];

const ServicesPages = () => {
  const { t } = useTranslation();

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-page__hero">
        <div className="services-page__hero-container">
          <span className="section__tag">{t('servicesPage.tag')}</span>
          <h1 className="section__title">{t('servicesPage.title')}</h1>
          <p className="services-page__hero-desc">{t('servicesPage.desc')}</p>
          <Link to="/company" className="btn">
            {t('hero.btn')} <span>➔</span>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-page__services">
        <div className="services-page__services-container">
          <div className="services-page__services-grid">
            {servicesList.map((service) => (
              <div className="services-page__services-card" key={service.key}>
                <div className="services-page__services-icon">{service.icon}</div>
                <div className="services-page__services-info">
                  <h3 className="services-page__services-title">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="services-page__services-desc">
                    {t(`services.items.${service.key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-page__process">
        <div className="services-page__process-container">
          <div className="services-page__process-header">
            <span className="section__tag">Process</span>
            <h2 className="section__title">{t('servicesPage.process.title')}</h2>
          </div>
          <div className="services-page__process-grid">
            {processSteps.map((step, index) => (
              <div className="services-page__process-card" key={step}>
                <div className="services-page__process-number">0{index + 1}</div>
                <h3 className="services-page__process-title">
                  {t(`servicesPage.process.${step}.title`)}
                </h3>
                <p className="services-page__process-desc">
                  {t(`servicesPage.process.${step}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">{t('cta.title')}</h2>
          <p className="cta__desc">{t('cta.desc')}</p>
          <Link to="/" className="btn">
            {t('cta.btn')} <span>➔</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPages;