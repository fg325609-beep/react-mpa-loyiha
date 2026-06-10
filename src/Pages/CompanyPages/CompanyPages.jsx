import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Modal from '../../Companents/Modal/Modal.jsx';
import './CompanyPages.scss';

const partners = ['Finsweet', 'TechCorp', 'InnovateLab', 'BrightIdeas', 'CloudBase', 'DataFlow'];
const valuesList = [
  { key: 'innovation', icon: '💡' },
  { key: 'quality', icon: '🏆' },
  { key: 'collaboration', icon: '🤝' },
  { key: 'integrity', icon: '🔒' },
];
const globalItems = ['education', 'environment', 'community'];
const teamMembers = ['member1', 'member2', 'member3', 'member4', 'member5', 'member6', 'member7', 'member8'];

const CompanyPages = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);

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
          </div>
          <div className="company-page__hero-images">
            <div className="company-page__hero-collage">
              <div className="company-page__collage-item company-page__collage-item--1">
                <img src="https://placehold.co/300x250/1c1e22/ffd2a4?text=Team" alt="Team" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--2">
                <img src="https://placehold.co/200x200/23252b/ffd2a4?text=Office" alt="Office" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--3">
                <img src="https://placehold.co/250x180/1c1e22/ffd2a4?text=Meeting" alt="Meeting" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--4">
                <img src="https://placehold.co/180x180/23252b/ffd2a4?text=Work" alt="Work" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="company-page__stats">
        <div className="company-page__stats-container">
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
            {partners.map((partner) => (
              <span className="company-page__partner" key={partner}>
                {'{'} {partner} {'}'}
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
          <div className="company-page__office-image">
            <img
              src="https://placehold.co/1200x500/1c1e22/ffd2a4?text=Modern+Office+Space"
              alt="Office"
            />
          </div>
          <div className="company-page__office-content">
            <h2 className="section__title">{t('companyPage.office.title')}</h2>
            <p className="company-page__office-desc">{t('companyPage.office.desc')}</p>
          </div>
        </div>
      </section>

      {/* ===== Values Section ===== */}
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

      {/* ===== Team Section ===== */}
      <section className="company-page__team">
        <div className="company-page__team-container">
          <div className="company-page__team-header">
            <span className="section__tag">Team</span>
            <h2 className="section__title">{t('companyPage.team.title')}</h2>
          </div>
          <div className="company-page__team-grid">
            {teamMembers.map((member, index) => (
              <div
                className="company-page__team-card"
                key={member}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="company-page__team-image">
                  <img
                    src={`https://placehold.co/200x240/23252b/ffd2a4?text=${t(`companyPage.team.${member}.name`).charAt(0)}`}
                    alt={t(`companyPage.team.${member}.name`)}
                  />
                  <div className={`company-page__team-overlay ${hoveredMember === index ? 'company-page__team-overlay--visible' : ''}`}>
                    <h3 className="company-page__team-name">
                      {t(`companyPage.team.${member}.name`)}
                    </h3>
                    <p className="company-page__team-role">
                      {t(`companyPage.team.${member}.role`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Newsletter Section ===== */}
      <section className="company-page__newsletter">
        <div className="company-page__newsletter-container">
          <h2 className="company-page__newsletter-title">{t('newsletter.title')}</h2>
          <p className="company-page__newsletter-desc">{t('newsletter.desc')}</p>
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
      </section>

      {/* ===== CTA Section ===== */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">{t('cta.title')}</h2>
          <p className="cta__desc">{t('cta.desc')}</p>
          <button className="btn" onClick={() => setIsModalOpen(true)}>
            {t('cta.btn')} <span>➔</span>
          </button>
        </div>
      </section>

      {/* ===== Modal ===== */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default CompanyPages;