import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.scss';

const BOT_TOKEN = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
const CHAT_ID = "6660879147";

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const text = `📬 Yangi xabar:\n\n👤 Ism: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      if (res.ok) {
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setSent(false);
          onClose();
        }, 2000);
      }
    } catch (err) {
      console.error('Telegram xatosi:', err);
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
        <h3 className="modal__title">{t('modal.title')}</h3>
        <p className="modal__desc">{t('modal.desc')}</p>
        {sent ? (
          <div className="modal__success">
            ✅ {t('modal.success') || 'Xabar yuborildi!'}
          </div>
        ) : (
          <form className="modal__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="modal__input"
              placeholder={t('modal.name_placeholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="modal__input"
              placeholder={t('modal.email_placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="modal__textarea"
              placeholder={t('modal.message_placeholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
            <button type="submit" className="modal__btn" disabled={sending}>
              {sending ? '⏳...' : t('modal.btn')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;