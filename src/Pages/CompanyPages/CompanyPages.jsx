import React from 'react';
import { useTranslation } from 'react-i18next';
import './CompanyPages.scss';

const partnersBottom = ['PartnerA', 'PartnerB', 'PartnerC', 'PartnerD', 'PartnerE'];
const heroPartners = ['Finsweet', 'TechCorp', 'InnovateLab', 'BrightIdeas'];
const globalItems = ['education', 'environment', 'community'];
const teamMembers = ['member1', 'member2', 'member3', 'member4', 'member5', 'member6'];

const CompanyPages = () => {
  const { t } = useTranslation();

  return (
    <main className="company-page">
      <section className="company-page__hero">
        <div className="company-page__hero-container">
          <article className="company-page__hero-content">
            <span className="section__tag">{t('companyPage.tag')}</span>
            <h1 className="section__title">{t('companyPage.title')}</h1>
            <p className="company-page__hero-desc">{t('companyPage.desc')}</p>
            <ul className="company-page__hero-partners">
              {heroPartners.map((partner) => (
                <li className="company-page__hero-partner" key={partner}>{partner}</li>
              ))}
            </ul>
          </article>
          <figure className="company-page__hero-images">
            <img src="/img/Shapes.png" alt="Shapes" />
          </figure>
        </div>
      </section>

      <section className="company-page__stats">
        <div className="company-page__stats-container">
          <header className="company-page__stats-header">
            <span className="section__tag">{t('companyPage.global.tag')}</span>
            <h2 className="section__title">{t('companyPage.global.title')}</h2>
          </header>
          <dl className="company-page__stats-grid">
            <div className="company-page__stats-item">
              <dt className="company-page__stats-number">{t('companyPage.stats.projects')}</dt>
              <dd className="company-page__stats-label">{t('companyPage.stats.projects_label')}</dd>
            </div>
            <div className="company-page__stats-item">
              <dt className="company-page__stats-number">{t('companyPage.stats.clients')}</dt>
              <dd className="company-page__stats-label">{t('companyPage.stats.clients_label')}</dd>
            </div>
            <div className="company-page__stats-item">
              <dt className="company-page__stats-number">{t('companyPage.stats.experience')}</dt>
              <dd className="company-page__stats-label">{t('companyPage.stats.experience_label')}</dd>
            </div>
            <div className="company-page__stats-item">
              <dt className="company-page__stats-number">{t('companyPage.stats.team')}</dt>
              <dd className="company-page__stats-label">{t('companyPage.stats.team_label')}</dd>
            </div>
          </dl>
          <ul className="company-page__partners">
            {partnersBottom.map((partner) => (
              <li className="company-page__partner" key={partner}>
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="company-page__global">
        <div className="company-page__global-container">
          <header className="company-page__global-content">
            <span className="section__tag">{t('companyPage.global.tag')}</span>
            <h2 className="section__title">{t('companyPage.global.title')}</h2>
            <p className="company-page__global-desc">{t('companyPage.global.desc')}</p>
          </header>
          <ol className="company-page__global-grid">
            {globalItems.map((item, index) => (
              <li className="company-page__global-card" key={item}>
                <span className="company-page__global-number">0{index + 1}</span>
                <h3 className="company-page__global-card-title">
                  {t(`companyPage.global.items.${item}.title`)}
                </h3>
                <p className="company-page__global-card-desc">
                  {t(`companyPage.global.items.${item}.desc`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="company-page__office">
        <div className="company-page__office-container">
          <div className="company-page__office-label">
            <span className="section__tag">{t('companyPage.office.tag') || 'Our Office'}</span>
          </div>
          <figure className="company-page__office-image">
            <img src="/img/gggggg.png" alt="Large open office with hanging lights" />
          </figure>
        </div>
      </section>

      <section className="company-page__team">
        <div className="company-page__team-container">
          <header className="company-page__team-header">
            <span className="section__tag">Team</span>
            <h2 className="section__title">{t('companyPage.team.title')}</h2>
          </header>
          <ul className="company-page__team-grid">
            {teamMembers.map((member) => (
              <li className="company-page__team-card" key={member}>
                <figure className="company-page__team-image">
                  <img
                    src="/img/ffffff.png"
                    alt={t(`companyPage.team.${member}.name`)}
                  />
                </figure>
              </li>
            ))}
            <li className="company-page__team-newsletter">
              <article className="company-page__newsletter-container">
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
              </article>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CompanyPages;