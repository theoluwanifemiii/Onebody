'use client';

import { Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

function toMailto(recipient: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${recipient}?${params.toString()}`;
}

export default function VisitForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Passion Service — Sunday 9:00 AM');
  const [partySize, setPartySize] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Party size: ${partySize}`,
      message ? `Message: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.location.href = toMailto(
      'hello@onebodychurch.org',
      `Visit — ${name}`,
      body,
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="visit-name" className="ob-kicker-dim block mb-2">
            Your Name
          </label>
          <input
            id="visit-name"
            type="text"
            required
            placeholder="Full name"
            className="site-field-dark"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="visit-email" className="ob-kicker-dim block mb-2">
            Email
          </label>
          <input
            id="visit-email"
            type="email"
            required
            placeholder="you@example.com"
            className="site-field-dark"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="visit-service" className="ob-kicker-dim block mb-2">
            Which Service
          </label>
          <select
            id="visit-service"
            className="site-select-dark"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option>Passion Service — Sunday 9:00 AM</option>
            <option>Hope Nights — Wednesday 6:00 PM</option>
          </select>
        </div>
        <div>
          <label htmlFor="visit-party" className="ob-kicker-dim block mb-2">
            Party Size
          </label>
          <input
            id="visit-party"
            type="text"
            placeholder="Just me / 2 / 4…"
            className="site-field-dark"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="visit-message" className="ob-kicker-dim block mb-2">
            Anything Else
          </label>
          <textarea
            id="visit-message"
            placeholder="Questions, accessibility needs, or a quick hello…"
            className="site-textarea-dark"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
      >
        Send via email <Send className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </form>
  );
}
