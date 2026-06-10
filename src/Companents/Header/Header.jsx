import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          {'{Finsweet'}
        </NavLink>

        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>
                {t('header.home', 'Home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>
                {t('header.service', 'Service')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/company" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>
                {t('header.company', 'Company')}
              </NavLink>
            </li>
            <li><span className="header__link header__link--disabled">{t('header.career', 'Career')}</span></li>
            <li><span className="header__link header__link--disabled">{t('header.blog', 'Blog')}</span></li>
            <li><span className="header__link header__link--disabled">{t('header.contact', 'Contact us')}</span></li>
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__lang-switcher">
            <button className={`header__lang-btn ${i18n.language === 'uz' ? 'header__lang-btn--active' : ''}`} onClick={() => changeLanguage('uz')}>UZ</button>
            <button className={`header__lang-btn ${i18n.language === 'en' ? 'header__lang-btn--active' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
            <button className={`header__lang-btn ${i18n.language === 'ru' ? 'header__lang-btn--active' : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
          </div>

          <button className="header__btn">
            {t('header.clone_project', 'Clone project')} <span>➔</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;