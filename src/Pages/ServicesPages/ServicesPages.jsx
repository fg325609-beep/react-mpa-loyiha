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
        </div>
      </section>

      <section className="services-page__details">
        <div className="services-page__details-container">
          <div className="services-page__details-row">
            <div className="services-page__details-content-left">
              <span className="section__tag">{t('servicesPage.tag')}</span>
              <h2 className="section__title">{t('servicesPage.title')}</h2>
              <p className="services-page__details-desc">{t('servicesPage.desc')}</p>
            </div>
            <div className="services-page__details-image">
              <img src="/img/sahifa2sectiontheare.png" alt="Services" />
            </div>
          </div>
          <div className="services-page__details-row services-page__details-row--reverse">
            <div className="services-page__details-image">
              <img src="/img/sahifa2sectionfoo.png" alt="Services details" />
            </div>
            <div className="services-page__details-content-left">
              <span className="section__tag">{t('servicesPage.tag')}</span>
              <h2 className="section__title">{t('servicesPage.title')}</h2>
              <p className="services-page__details-desc">{t('servicesPage.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page__newsletter">
        <div className="services-page__newsletter-container">
          <div className="services-page__newsletter-left">
            <img src="/img/llll.png" alt="Newsletter" />
          </div>
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default ServicesPages;