import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Modal from '../../Companents/Modal/Modal.jsx';
import './CompanyPages.scss';

const partners = ['Finsweet', 'TechCorp', 'InnovateLab', 'BrightIdeas', 'CloudBase'];
const partnersBottom = ['PartnerA', 'PartnerB', 'PartnerC', 'PartnerD', 'PartnerE'];
const globalItems = ['education', 'environment', 'community'];
const teamMembers = ['member1', 'member2', 'member3', 'member4', 'member5', 'member6'];

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
                <img src="https://placehold.co/300x250/1c1e22/ffd2a4?text=Team+Meeting" alt="Team around laptop" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--2">
                <img src="https://placehold.co/200x200/23252b/ffd2a4?text=Negotiation" alt="Long table negotiation" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--3">
                <img src="https://placehold.co/250x180/1c1e22/ffd2a4?text=Happy+Team" alt="Women clapping and laughing" />
              </div>
              <div className="company-page__collage-item company-page__collage-item--4">
                <img src="https://placehold.co/180x180/23252b/ffd2a4?text=Teaching" alt="Woman presenting at board" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Section (Och shaftoli fon) ===== */}
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

      {/* ===== Office Section (large full-width image) ===== */}
      <section className="company-page__office">
        <div className="company-page__office-container">
          <div className="company-page__office-label">
            <span className="section__tag">{t('companyPage.office.tag') || 'Our Office'}</span>
          </div>
          <div className="company-page__office-image">
            <img
              src="https://placehold.co/1400x500/1c1e22/ffd2a4?text=Modern+Open+Office+Space"
              alt="Large open office with hanging lights"
            />
          </div>
        </div>
      </section>

      {/* ===== Team Section (3 cols x 2 rows) ===== */}
      <section className="company-page__team">
        <div className="company-page__team-container">
          <div className="company-page__team-header">
            <span className="section__tag">Team</span>
            <h2 className="section__title">{t('companyPage.team.title')}</h2>
          </div>
          <div className="company-page__team-grid">
            {teamMembers.map((member, index) => {
              // Third member (index 2) has blue overlay always visible (hover effect)
              const isJeromeBell = index === 2;
              return (
                <div
                  className="company-page__team-card"
                  key={member}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="company-page__team-image">
                    <img
                      src={`https://placehold.co/300x320/23252b/ffd2a4?text=${t(`companyPage.team.${member}.name`).charAt(0)}`}
                      alt={t(`companyPage.team.${member}.name`)}
                    />
                    <div className={`company-page__team-overlay ${isJeromeBell || hoveredMember === index ? 'company-page__team-overlay--visible' : ''}`}>
                      <h3 className="company-page__team-name">
                        {t(`companyPage.team.${member}.name`)}
                      </h3>
                      <p className="company-page__team-role">
                        {t(`companyPage.team.${member}.role`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Newsletter as last row spanning full width */}
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

      {/* ===== Modal ===== */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default CompanyPages;