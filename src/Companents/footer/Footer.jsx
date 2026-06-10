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
          {/* Company Info */}
          <div className="footer__brand">
            <NavLink to="/" className="footer__logo">
              {'{Finsweet'}
            </NavLink>
            <p className="footer__desc">
              {t('footer.company_desc')}
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">t</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">ig</a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__col">
            <h4 className="footer__title">{t('footer.links')}</h4>
            <ul className="footer__list">
              <li><NavLink to="/" className="footer__link">{t('header.home')}</NavLink></li>
              <li><NavLink to="/services" className="footer__link">{t('header.service')}</NavLink></li>
              <li><NavLink to="/company" className="footer__link">{t('header.company')}</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__title">{t('footer.contact_info')}</h4>
            <ul className="footer__list">
              <li className="footer__contact-item">{t('footer.address')}</li>
              <li className="footer__contact-item">{t('footer.phone')}</li>
              <li className="footer__contact-item">{t('footer.email')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Finsweet. {t('footer.copyright')}
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">{t('footer.privacy')}</a>
            <a href="#" className="footer__legal-link">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;