import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Modal from '../../Companents/Modal/Modal.jsx';
import './ServicesPages.scss';

const servicesListItems = ['support', 'development', 'cloud', 'consulting', 'it'];
const processSteps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];
const zigzagItems = ['support', 'development', 'cloud', 'consulting', 'it'];

const ServicesPages = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-page__hero">
        <div className="services-page__hero-container">
          <div className="services-page__hero-content">
            <span className="section__tag">{t('servicesPage.tag')}</span>
            <h1 className="section__title">{t('servicesPage.title')}</h1>
            <p className="services-page__hero-desc">{t('servicesPage.desc')}</p>
            <button className="btn" onClick={() => setIsModalOpen(true)}>
              {t('servicesPage.btn')} <span>➔</span>
            </button>
          </div>
          <div className="services-page__hero-list">
            {servicesListItems.map((item) => (
              <div className="services-page__hero-list-item" key={item}>
                <div className="services-page__hero-list-bullet">✦</div>
                <span>{t(`servicesPage.list.${item}.title`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (6 steps - 2 rows × 3 cols chess pattern) */}
      <section className="services-page__process">
        <div className="services-page__process-container">
          <div className="services-page__process-header">
            <span className="section__tag">{t('process.tag')}</span>
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
          {/* Dashed connecting lines */}
          <div className="services-page__process-lines">
            <div className="services-page__process-line services-page__process-line--1"></div>
            <div className="services-page__process-line services-page__process-line--2"></div>
            <div className="services-page__process-line services-page__process-line--3"></div>
            <div className="services-page__process-line services-page__process-line--4"></div>
            <div className="services-page__process-line services-page__process-line--5"></div>
          </div>
        </div>
      </section>

      {/* Zigzag Details Section (5 alternating rows) */}
      <section className="services-page__details">
        <div className="services-page__details-container">
          {zigzagItems.map((item, index) => {
            const isReversed = index % 2 !== 0;
            // First and last two are white bg, third (index 2) is light blue
            const bgClass = index === 2 ? 'services-page__details-row--blue' : '';
            return (
              <div
                className={`services-page__details-row ${isReversed ? 'services-page__details-row--reverse' : ''} ${bgClass}`}
                key={item}
              >
                <div className="services-page__details-image">
                  <img
                    src={`https://placehold.co/500x350/${index === 2 ? '23252b' : '1c1e22'}/ffd2a4?text=${t(`servicesPage.details.${item}.title`).replace(/ /g, '+')}`}
                    alt={t(`servicesPage.details.${item}.title`)}
                  />
                </div>
                <div className="services-page__details-content">
                  <div className="services-page__details-number">0{index + 1}</div>
                  <h3 className="services-page__details-title">
                    {t(`servicesPage.details.${item}.title`)}
                  </h3>
                  <p className="services-page__details-desc">
                    {t(`servicesPage.details.${item}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Big Banner Section */}
      <section className="services-page__banner">
        <div className="services-page__banner-container">
          <div className="services-page__banner-number">1600 x 3175</div>
        </div>
      </section>

      {/* Modal (Popup) at bottom - shown as a section */}
      <section className="services-page__modal-showcase">
        <div className="services-page__modal-showcase-container">
          <h2 className="section__title">{t('modal.title')}</h2>
          <button className="btn" onClick={() => setIsModalOpen(true)}>
            {t('modal.btn') || 'Savolingiz bormi?'} <span>➔</span>
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="services-page__newsletter">
        <div className="services-page__newsletter-container">
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
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default ServicesPages;