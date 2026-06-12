import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <NavLink to="/" className="footer__logo">
              {'{Finsweet'}
            </NavLink>
            <p className="footer__desc">
              {t('footer.company_desc')}
            </p>
            <nav className="footer__social" aria-label="Ijtimoiy tarmoqlar">
              <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">t</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">ig</a>
            </nav>
          </div>

          <nav className="footer__col" aria-label="Sahifalar">
            <h4 className="footer__title">{t('footer.links')}</h4>
            <ul className="footer__list">
              <li><NavLink to="/" className="footer__link">{t('header.home')}</NavLink></li>
              <li><NavLink to="/services" className="footer__link">{t('header.service')}</NavLink></li>
              <li><NavLink to="/company" className="footer__link">{t('header.company')}</NavLink></li>
            </ul>
          </nav>

          <address className="footer__col">
            <h4 className="footer__title">{t('footer.contact_info')}</h4>
            <ul className="footer__list">
              <li className="footer__contact-item">{t('footer.address')}</li>
              <li className="footer__contact-item">{t('footer.phone')}</li>
              <li className="footer__contact-item">{t('footer.email')}</li>
            </ul>
          </address>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2024 Finsweet. {t('footer.copyright')}
          </p>
          <nav className="footer__legal" aria-label="Huquqiy">
            <a href="#" className="footer__legal-link">{t('footer.privacy')}</a>
            <a href="#" className="footer__legal-link">{t('footer.terms')}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;