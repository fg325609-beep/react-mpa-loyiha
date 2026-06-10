import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './CompanyPages.scss';

const partnersBottom = ['PartnerA', 'PartnerB', 'PartnerC', 'PartnerD', 'PartnerE'];
const globalItems = ['education', 'environment', 'community'];
const teamMembers = ['member1', 'member2', 'member3', 'member4', 'member5', 'member6'];

const CompanyPages = () => {
  const { t } = useTranslation();

  return (
    <main className="company-page">
      {/* ===== Hero Section ===== */}
      <section className="company-page__hero">
        <div className="company-page__hero-container">
          <div className="company-page__hero-content">
            <span className="section__tag">{t('companyPage.tag')}</span>
            <h1 className="section__title">{t('companyPage.title')}</h1>
            <p className="company-page__hero-desc">{t('companyPage.desc')}</p>
            <Link to="/services" className="btn">
              {t('companyPage.btn')} <span>➔</span>
            </Link>
            <div className="company-page__hero-indicators">
              <div className="company-page__hero-dot company-page__hero-dot--active"></div>
              <div className="company-page__hero-dot"></div>
              <div className="company-page__hero-dot"></div>
              <div className="company-page__hero-dot"></div>
            </div>
          </div>
          <div className="company-page__hero-images">
            <div className="company-page__hero-collage">
              <div className="company-page__collage-item company-page__collage-item--1">
                <img src="/img/qqqqq.png" alt="Team meeting" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--2">
                <img src="/img/qqqqq.png" alt="Negotiation" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--3">
                <img src="/img/qqqqq.png" alt="Happy team" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--4">
                <img src="/img/qqqqq.png" alt="Teaching" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="company-page__stats">
        <div className="company-page__stats-container">
          <div className="company-page__stats-header">
            <span className="section__tag">{t('companyPage.global.tag')}</span>
            <h2 className="section__title">{t('companyPage.global.title')}</h2>
          </div>
          <div className="company-page__stats-grid">
            <div className="company-page__stats-item">
              <span className="company-page__stats-number">{t('companyPage.stats.projects')}</span>
              <span className="company-page__stats-label">{t('companyPage.stats.projects_label')}</span>
            </div>
            <div className="company-page__stats-item">
              <span className="company-page__stats-number">{t('companyPage.stats.clients')}</span>
              <span className="company-page__stats-label">{t('companyPage.stats.clients_label')}</span>
            </div>
            <div className="company-page__stats-item">
              <span className="company-page__stats-number">{t('companyPage.stats.experience')}</span>
              <span className="company-page__stats-label">{t('companyPage.stats.experience_label')}</span>
            </div>
            <div className="company-page__stats-item">
              <span className="company-page__stats-number">{t('companyPage.stats.team')}</span>
              <span className="company-page__stats-label">{t('companyPage.stats.team_label')}</span>
            </div>
          </div>
          <div className="company-page__partners">
            {partnersBottom.map((partner) => (
              <span className="company-page__partner" key={partner}>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Global Citizenship Section ===== */}
      <section className="company-page__global">
        <div className="company-page__global-container">
          <div className="company-page__global-content">
            <span className="section__tag">{t('companyPage.global.tag')}</span>
            <h2 className="section__title">{t('companyPage.global.title')}</h2>
            <p className="company-page__global-desc">{t('companyPage.global.desc')}</p>
          </div>
          <div className="company-page__global-grid">
            {globalItems.map((item, index) => (
              <div className="company-page__global-card" key={item}>
                <div className="company-page__global-number">0{index + 1}</div>
                <h3 className="company-page__global-card-title">
                  {t(`companyPage.global.items.${item}.title`)}
                </h3>
                <p className="company-page__global-card-desc">
                  {t(`companyPage.global.items.${item}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Office Section ===== */}
      <section className="company-page__office">
        <div className="company-page__office-container">
          <div className="company-page__office-label">
            <span className="section__tag">{t('companyPage.office.tag') || 'Our Office'}</span>
          </div>
          <div className="company-page__office-image">
            <img src="/img/gggggg.png" alt="Large open office with hanging lights" />
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="company-page__team">
        <div className="company-page__team-container">
          <div className="company-page__team-header">
            <span className="section__tag">Team</span>
            <h2 className="section__title">{t('companyPage.team.title')}</h2>
          </div>
          <div className="company-page__team-grid">
            {teamMembers.map((member, index) => (
              <div className="company-page__team-card" key={member}>
                <div className="company-page__team-image">
                  <img
                    src={`https://placehold.co/300x320/23252b/ffd2a4?text=${t(`companyPage.team.${member}.name`).charAt(0)}`}
                    alt={t(`companyPage.team.${member}.name`)}
                  />
                </div>
              </div>
            ))}
            {/* Newsletter as last row */}
            <div className="company-page__team-newsletter">
              <div className="company-page__newsletter-container">
                <h2 className="company-page__newsletter-title">{t('newsletter.title')}</h2>
                <form className="company-page__newsletter-form">
                  <input
                    type="email"
                    className="company-page__newsletter-input"
                    placeholder={t('newsletter.placeholder')}
                    required
                  />
                  <button type="submit" className="company-page__newsletter-btn">
                    {t('newsletter.btn')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyPages;