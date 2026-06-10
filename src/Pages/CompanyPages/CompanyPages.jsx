import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './CompanyPages.scss';

const valuesList = [
  { key: 'innovation', icon: '💡' },
  { key: 'quality', icon: '🏆' },
  { key: 'collaboration', icon: '🤝' },
  { key: 'integrity', icon: '🔒' },
];

const teamMembers = ['member1', 'member2', 'member3', 'member4'];

const CompanyPages = () => {
  const { t } = useTranslation();

  return (
    <main className="company-page">
      {/* Hero Section */}
      <section className="company-page__hero">
        <div className="company-page__hero-container">
          <div className="company-page__hero-content">
            <span className="section__tag">{t('companyPage.tag')}</span>
            <h1 className="section__title">{t('companyPage.title')}</h1>
            <p className="company-page__hero-desc">{t('companyPage.desc')}</p>
            <Link to="/services" className="btn">
              {t('services.tag')} <span>➔</span>
            </Link>
          </div>
          <div className="company-page__hero-image">
            <img src="https://placehold.co/600x500/1c1e22/ffd2a4?text=Finsweet+Team" alt="Company" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="company-page__values">
        <div className="company-page__values-container">
          <div className="company-page__values-header">
            <span className="section__tag">Values</span>
            <h2 className="section__title">{t('companyPage.values.title')}</h2>
          </div>
          <div className="company-page__values-grid">
            {valuesList.map((value) => (
              <div className="company-page__values-card" key={value.key}>
                <div className="company-page__values-icon">{value.icon}</div>
                <h3 className="company-page__values-title">
                  {t(`companyPage.values.${value.key}.title`)}
                </h3>
                <p className="company-page__values-desc">
                  {t(`companyPage.values.${value.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="company-page__team">
        <div className="company-page__team-container">
          <div className="company-page__team-header">
            <span className="section__tag">Team</span>
            <h2 className="section__title">{t('companyPage.team.title')}</h2>
          </div>
          <div className="company-page__team-grid">
            {teamMembers.map((member) => (
              <div className="company-page__team-card" key={member}>
                <div className="company-page__team-avatar">
                  {t(`companyPage.team.${member}.name`).charAt(0)}
                </div>
                <h3 className="company-page__team-name">
                  {t(`companyPage.team.${member}.name`)}
                </h3>
                <p className="company-page__team-role">
                  {t(`companyPage.team.${member}.role`)}
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

export default CompanyPages;