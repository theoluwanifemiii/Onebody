'use client';

import { Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

function toMailto(recipient: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${recipient}?${params.toString()}`;
}

export default function AcademyApplicationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whyLova, setWhyLova] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      whyLova ? `Why LOVA: ${whyLova}` : '',
      notes ? `Additional notes: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n\n');
    window.location.href = toMailto(
      'hello@onebodychurch.org',
      `LOVA Application — ${name}`,
      body,
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="lova-name" className="block text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
            Your Name
          </label>
          <input
            id="lova-name"
            type="text"
            required
            placeholder="Full name"
            className="site-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lova-email" className="block text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
            Email
          </label>
          <input
            id="lova-email"
            type="email"
            required
            placeholder="you@example.com"
            className="site-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lova-why" className="block text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
            Why do you want to join LOVA?
          </label>
          <textarea
            id="lova-why"
            required
            placeholder="Tell us what draws you to this pathway…"
            className="site-textarea"
            value={whyLova}
            onChange={(e) => setWhyLova(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lova-notes" className="block text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
            Anything else we should know?
          </label>
          <textarea
            id="lova-notes"
            placeholder="Questions, track preference, scheduling notes…"
            className="site-textarea"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
      >
        Submit application <Send className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </form>
  );
}
