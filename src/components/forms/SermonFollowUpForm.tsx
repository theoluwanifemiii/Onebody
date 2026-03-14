'use client';

import { Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

function toMailto(recipient: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${recipient}?${params.toString()}`;
}

export default function SermonFollowUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      message ? `Message: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.location.href = toMailto(
      'hello@onebodychurch.org',
      `Sermon Follow-up — ${name}`,
      body,
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="sermon-name" className="ob-kicker-dim block mb-2">
            Your Name
          </label>
          <input
            id="sermon-name"
            type="text"
            required
            placeholder="Full name"
            className="site-field-dark"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sermon-email" className="ob-kicker-dim block mb-2">
            Email
          </label>
          <input
            id="sermon-email"
            type="email"
            required
            placeholder="you@example.com"
            className="site-field-dark"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sermon-message" className="ob-kicker-dim block mb-2">
            Your Reflection or Question
          </label>
          <textarea
            id="sermon-message"
            placeholder="What stirred in you? What question do you have?"
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
