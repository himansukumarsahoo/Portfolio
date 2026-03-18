import React, { useId, useMemo, useState } from 'react'
import { BiPaperPlane } from "react-icons/bi";
import emailjs from '@emailjs/browser';

const Form = () => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const emailJsConfig = useMemo(() => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    return { serviceId, templateId, publicKey };
  }, []);

  return (
    <>
        <form
          className="right-contact"
          onSubmit={async (e) => {
            e.preventDefault();
            if (isSending) return;

            const { serviceId, templateId, publicKey } = emailJsConfig;
            if (!serviceId || !templateId || !publicKey) {
              setStatus({
                type: 'error',
                message: 'Email service is not configured yet. Add EmailJS keys to your .env file and restart the dev server.',
              });
              return;
            }

            setIsSending(true);
            setStatus({ type: 'idle', message: '' });

            const form = e.currentTarget;
            const data = new FormData(form);
            const params = {
              from_name: String(data.get('name') || ''),
              reply_to: String(data.get('email') || ''),
              message: String(data.get('message') || ''),
            };

            try {
              await emailjs.send(serviceId, templateId, params, { publicKey });
              setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
              form.reset();
            } catch (err) {
              setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again in a moment.',
              });
            } finally {
              setIsSending(false);
            }
          }}
        >
          <div className="namemail">
            <div className="name">
              <label className="field-label" htmlFor={nameId}>Name</label>
              <input id={nameId} name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </div>
            <div className="mail">
              <label className="field-label" htmlFor={emailId}>Email</label>
              <input id={emailId} name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </div>
          </div>
          <div className="message">
            <label className="field-label" htmlFor={messageId}>Message</label>
            <textarea id={messageId} name="message" placeholder="Tell me about your project..." rows={6} required />
          </div>
          {status.type !== 'idle' && status.message ? (
            <div
              className={status.type === 'success' ? 'form-status success' : 'form-status error'}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          ) : null}
          <div className="send">
            <button type="submit" disabled={isSending} aria-busy={isSending}>
              {isSending ? 'Sending…' : 'Send'} <BiPaperPlane size={18} />
            </button>
          </div>
        </form>
    </>
  )
}

export default Form