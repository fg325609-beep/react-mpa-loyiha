import React from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.scss';

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
        <h3 className="modal__title">{t('modal.title')}</h3>
        <p className="modal__desc">{t('modal.desc')}</p>
        <form className="modal__form">
          <input
            type="text"
            className="modal__input"
            placeholder={t('modal.name_placeholder')}
            required
          />
          <input
            type="email"
            className="modal__input"
            placeholder={t('modal.email_placeholder')}
            required
          />
          <textarea
            className="modal__textarea"
            placeholder={t('modal.message_placeholder')}
            rows={4}
            required
          />
          <button type="submit" className="modal__btn">
            {t('modal.btn')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;