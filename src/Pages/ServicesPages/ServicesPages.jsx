import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Modal from '../../Companents/Modal/Modal.jsx';
import './ServicesPages.scss';

const servicesListItems = ['support', 'development', 'cloud', 'consulting', 'it'];
const processSteps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

const ServicesPages = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="services-page">
      <section className="services-page__hero">
        <div className="services-page__hero-container">
          <article className="services-page__hero-content">
            <span className="section__tag">{t('servicesPage.tag')}</span>
            <h1 className="section__title">{t('servicesPage.title')}</h1>
            <p className="services-page__hero-desc">{t('servicesPage.desc')}</p>
            <button className="btn" type="button" onClick={() => setIsModalOpen(true)}>
              {t('servicesPage.btn')} <span>➔</span>
            </button>
          </article>
          <ul className="services-page__hero-list">
            {servicesListItems.map((item) => (
              <li className="services-page__hero-list-item" key={item}>
                <span className="services-page__hero-list-bullet" aria-hidden="true">✦</span>
                <span>{t(`servicesPage.list.${item}.title`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-page__process">
        <div className="services-page__process-container">
          <header className="services-page__process-header">
            <span className="section__tag">{t('process.tag')}</span>
            <h2 className="section__title">{t('servicesPage.process.title')}</h2>
          </header>
          <ol className="services-page__process-grid">
            {processSteps.map((step, index) => (
              <li className="services-page__process-card" key={step}>
                <span className="services-page__process-number">0{index + 1}</span>
                <h3 className="services-page__process-title">
                  {t(`servicesPage.process.${step}.title`)}
                </h3>
                <p className="services-page__process-desc">
                  {t(`servicesPage.process.${step}.desc`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="services-page__details">
        <div className="services-page__details-container">
          <article className="services-page__details-row">
            <div className="services-page__details-content-left">
              <span className="section__tag">{t('servicesPage.tag')}</span>
              <h2 className="section__title">{t('servicesPage.title')}</h2>
              <p className="services-page__details-desc">{t('servicesPage.desc')}</p>
            </div>
            <figure className="services-page__details-image">
              <img src="/img/sahifa2sectiontheare.png" alt="Services" />
            </figure>
          </article>
          <article className="services-page__details-row services-page__details-row--reverse">
            <figure className="services-page__details-image">
              <img src="/img/sahifa2sectionfoo.png" alt="Services details" />
            </figure>
            <div className="services-page__details-content-left">
              <span className="section__tag">{t('servicesPage.tag')}</span>
              <h2 className="section__title">{t('servicesPage.title')}</h2>
              <p className="services-page__details-desc">{t('servicesPage.desc')}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="services-page__newsletter" aria-label="Yangiliklarga obuna bo'lish">
        <div className="services-page__newsletter-container">
          <figure className="services-page__newsletter-left">
            <img src="/img/llll.png" alt="Newsletter" />
          </figure>
          <div className="services-page__newsletter-right">
            <h2 className="services-page__newsletter-title">{t('newsletter.title')}</h2>
            <p className="services-page__newsletter-desc">{t('newsletter.desc')}</p>
            <form className="services-page__newsletter-form">
              <input
                type="email"
                className="services-page__newsletter-input"
                placeholder={t('newsletter.placeholder')}
                required
              />
              <button type="submit" className="services-page__newsletter-btn">
                {t('newsletter.btn')}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default ServicesPages;